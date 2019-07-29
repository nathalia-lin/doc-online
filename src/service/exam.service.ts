import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';

import { SiteService } from './site.service';
import { ProfileService } from './profile.service';
import { PatientService } from './patient.service';
import { DoctorService } from './doctor.service';
import { UserService } from './user.service';
import { UserSiteService } from './userSite.service';
import { LoginService } from './login.service';
import { UserInsuranceService } from './userInsurance.service';
import { InsuranceService } from './insurance.service';
import { PlanService } from './plan.service';
import { LogExamService } from './logExam.service';

import User from '../models/user.model';
import Site from '../models/site.model';
import Patient from '../models/patient.model';
import Doctor from '../models/doctor.model';
import Insurance from '../models/insurance.model';
import Views from '../models/views.model';
import Exam from '../models/exam.model';

import { CreateExamDto } from '../dto/exam.dto';
import { CreateFilterDto } from '../dto/filter.dto';

@Injectable()
export class ExamService {

    constructor(
        @Inject('ExamRepository') private readonly examRepository: typeof Exam,
        @Inject('SiteRepository') private readonly siteRepository: typeof Site,

        @Inject('SiteService') private siteService: SiteService,
        @Inject('ProfileService') private profileService: ProfileService,
        @Inject('PatientService') private patientService: PatientService,
        @Inject('DoctorService') private doctorService: DoctorService,
        @Inject('UserService') private userService: UserService,
        @Inject('UserSiteService') private userSiteService: UserSiteService,
        @Inject('LoginService') private loginService: LoginService,
        @Inject('InsuranceService') private insuranceService: InsuranceService,
        @Inject('UserInsuranceService') private userInsuranceService: UserInsuranceService,
        @Inject('PlanService') private planService: PlanService,
        @Inject('LogExamService') private logExamService: LogExamService,
    ) { }

    async create(
        token: any,
        networkId: string,
        studyInstanceUID: string,
        studyDate: Date,
        accessionNum: string,
        modality: string,
        statusType: string,
        reqProcDescription: string,
        insuranceId: number,
        insuranceName: string,
        planId: number,
        planName: string,
        patientId: number,
        name: string,
        socialName: string,
        birthDate: Date,
        sex: string,
        phone: string,
        email: string,
        pid: string,
        loginUsername: string,
        loginPassword: string,
        reqDoctorDocType: string,
        reqDoctorDocNum: string,
        reqDoctorDocIssuer: string,
        reqDoctorName: string,
        consDoctorDocType: string,
        consDoctorDocNum: string,
        consDoctorDocIssuer: string,
        consDoctorName: string,
    ) {

        // This exam is createdby
        let createdBy = await this.createdBy(token.id);
        // Check if the site exists
        let siteId = await this.siteExists(networkId);

        // PATIENT
        let patientProfile, patientUser, patientUserSite;
        let patient = await this.patientService.findOne(patientId);
        if (!patient) {
            // é possível ter um profile sem ser um paciente? Precisa find profile primeiro antes de criar?
            patientProfile = await this.profileService.createProfile(name, socialName, sex, birthDate, phone, email);
            patient = await this.patientService.createPatient(patientId, patientProfile.id, pid);
            patientUser = await this.userService.createUser(patientProfile.id, null, 'PATIENT', null, null, null, null);
            patientUserSite = await this.userSiteService.createUserSite(patientUser, siteId, createdBy);
        }
        await this.createLogin(patientUser, null, loginPassword, loginUsername);

        let insurance = await this.insuranceService.findOne(insuranceId);
        if (!insurance) {
            await this.insuranceService.createInsurance(insuranceId, siteId, insuranceName);
            await this.userInsuranceService.createUserInsurance(insuranceId, patientUser.id)
        }

        let plan = await this.planService.findOne({ 'insuranceId': insuranceId });
        if (!plan) { await this.planService.createPlan(planId, insuranceId, planName) }

        // REQUESTING DOCTOR
        let reqDoctorProfile, reqDoctorUser, reqDoctorUserSite;
        let reqDoctor = await this.doctorService.findOne({
            'docType': reqDoctorDocType,
            'docIssuer': reqDoctorDocIssuer,
            'docNum': reqDoctorDocNum
        });

        if (!reqDoctor) {
            const reqDoctorSocialName = reqDoctorName.split(" ")[0];
            reqDoctorProfile = await this.profileService.createProfile(reqDoctorName, reqDoctorSocialName, null, null, null, null);
            reqDoctor = await this.doctorService.createDoctor(reqDoctorProfile.id, reqDoctorDocType, reqDoctorDocIssuer, reqDoctorDocNum);
            reqDoctorUser = await this.userService.createUser(reqDoctorProfile.id, null, 'DOCTOR', null, null, null, null);
            reqDoctorUserSite = await this.userSiteService.createUserSite(reqDoctorUser, siteId, createdBy);
        }
        await this.createLogin(reqDoctorUser, reqDoctor);

        // CONSULTING DOCTOR
        let consDoctorProfile, consDoctorUser, consDoctorUserSite;
        let consDoctor = await this.doctorService.findOne({ 'docNum': consDoctorDocNum });
        if (consDoctorName && !consDoctor) {
            const consDoctorSocialName = consDoctorName.split(" ")[0];
            consDoctorProfile = await this.profileService.createProfile(consDoctorName, consDoctorSocialName, null, null, null, null);
            consDoctor = await this.doctorService.createDoctor(consDoctorProfile.id, consDoctorDocType, consDoctorDocIssuer, consDoctorDocNum);
            consDoctorUser = await this.userService.createUser(consDoctorProfile.id, null, 'DOCTOR', null, null, null, null);
            consDoctorUserSite = await this.userSiteService.createUserSite(consDoctorUser, siteId, createdBy);
        }
        let consDoctorId = await this.getConsDoctorId(consDoctorName, consDoctor);
        await this.createLogin(consDoctorUser, consDoctor);

        // Once you have all the information, create an exam
        const exam = await this.createExam(
            pid, accessionNum, studyInstanceUID, networkId, siteId, 
            modality, reqProcDescription, studyDate, statusType, patientId, 
            reqDoctor.id, consDoctorId, insuranceId, null, null);

        await this.logExamService.createLogExam(exam.id);
    }

    // Check if user exists
    async createdBy(loginId: number) {
        if (loginId) {
            let login = await this.loginService.findOne(loginId);
            let user = await this.userService.findOne(login.userId);
            return user.id;
        } else {
            throw new Error('User does not exist');
        }
    }

    // Check if site exists
    async siteExists(networkId: string) {
        let site = await this.siteService.findOne({
            'networkId': networkId
        });
        if (site) {
            return site.id;
        } else {
            throw new Error('Site does not exist');
        }
    }

    async createLogin(user: User, doctor, password = null, username = null) {
        if (!user) {
            return null
        }
        let profile = await this.profileService.findOne(user.profileId)
        if (!password) {
            username = doctor.docNum;
            password = doctor.docNum + '@' + profile.socialName;
        }
        await this.loginService.createLogin(user.id, username, password);
    }

    async getConsDoctorId(consDoctorName, consDoctor) {
        if (consDoctorName) {
            return consDoctor.id;
        }
        return null;
    }

    // ========================================================================================================

    public async search(body: CreateFilterDto, token) {
        const where = {};
        body.filters.forEach(field => {
            // what if you filter through same key, but different values?
            where[field['key']] = field['value']
        })
        let exams = await this.find({ ...where });

        if (exams.length > 0) {
            const login = await this.loginService.findOne(token.id);
            const user = await this.userService.findOne(login.userId);

            const profiles = user.profiles.trim();
            const profileId = user.profileId;
            if (profiles === 'PATIENT') {
                const patient = await this.patientService.findOne({ profileId });
                exams = await this.find({ 'patientId': patient.id })
            } else if (profiles === 'DOCTOR') {
                const doctor = await this.doctorService.findOne({ profileId });
                exams = await this.find({ [Op.or]: [{ 'requestingId': doctor.id }, { 'consultingId': doctor.id }] });
            } else if (profiles === 'ADMIN') {
                // show all by site(?)
            }
        }
        return exams;
    }

    // ========================================================================================================

    async createExam(
        pid,
        accessionNum,
        studyInstanceUID,
        networkId,
        siteId,
        modality,
        reqProcDescription,
        studyDate,
        statusType,
        patientId,
        reqDoctorId,
        consDoctorId,
        insuranceId,
        lastReportView,
        lastImageView
    ): Promise<Exam> {
        let exam = {
            'pid': pid,
            'accessionNum': accessionNum,
            'studyInstanceUID': studyInstanceUID,
            'networkId': networkId,
            'siteId': siteId,
            'modality': modality,
            'description': reqProcDescription,
            'examDate': studyDate,
            'statusType': statusType,
            'patientId': patientId,
            'requestingId': reqDoctorId,
            'consultingId': consDoctorId,
            'insuranceId': insuranceId,
            'lastReportView': lastReportView,
            'lastImageView': lastImageView,
        } as CreateExamDto;
        return await this.examRepository.create(exam);
    }

    async find(where: any) {
        const exams = await this.examRepository.findAll({
            where: where,
            include: [Site, Patient, Insurance, Views, { model: Doctor, as: 'requestingDoctor' }, { model: Doctor, as: 'consultingDoctor' }]
        });
        return exams;
    }

    async findOne(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const exam = await this.examRepository.findOne({
            where: where,
            include: [Site, Patient, Insurance, Views, { model: Doctor, as: 'requestingDoctor' }, { model: Doctor, as: 'consultingDoctor' }]
        });
        return exam;
    }

    async updateOne(id: number, body: any) {
        return await this.examRepository.update(body, { where: { 'id': id } });
    }

    async deleteOne(examId: number) {
        const deletedExam = await this.examRepository.destroy({
            where: { 'id': examId }
        });
        return await deletedExam;
    }
}
