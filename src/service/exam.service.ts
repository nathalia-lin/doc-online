import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Op } from 'sequelize';

import User from '../models/user.model';
import Site from '../models/site.model';
import Patient from '../models/patient.model';
import Doctor from '../models/doctor.model';
import Insurance from '../models/insurance.model';
import Views from '../models/views.model';
import Exam from '../models/exam.model';
import Plan from '../models/plan.model';
import Login from '../models/login.model';
import Profile from '../models/profile.model';
import UserSite from '../models/userSite.model';

import { CreateExamDto } from '../dto/exam.dto';
import { CreateFilterDto } from '../dto/filter.dto';
import { CreateService } from './create.service';

@Injectable()
export class ExamService {

    constructor(
        @Inject('ExamRepository') private readonly examRepository: typeof Exam,
        @Inject('CreateService') private createService: CreateService,
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
        insuranceId: string,
        insuranceName: string,
        planId: number,
        planName: string,
        patientId: string,
        name: string,
        socialName: string,
        birthDate: string,
        sex: string,
        phone: string,
        email: string,
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
        if (!patientId) { throw new NotFoundException('Patient not found') }

        let patientProfile, patientUser, patientUserSite;
        let patient = await Patient.findOne({ where: { 'pid': patientId } });
        if (!patient) {
            // é possível ter um profile sem ser um paciente? Precisa find profile primeiro antes de criar?
            socialName = socialName.split(' ')[0];
            patientProfile = await this.createService.createProfile(name, socialName, sex, birthDate, phone, email);
            patient = await this.createService.createPatient(patientProfile.id, patientId);
            patientUser = await this.createService.createUser(patientProfile.id, null, 'PATIENT', null, null, null, null);
            patientUserSite = await this.createService.createUserSite(patientUser.id, siteId, createdBy);
        }
        await this.createLogin(patientUser, null, loginPassword, loginUsername);

        let insurance = await Insurance.findOne({ where: { 'insuranceId': insuranceId } });
        if (!insurance && insuranceId) {
            insurance = await this.createService.createInsurance(insuranceId, siteId, insuranceName);
            await this.createService.createUserInsurance(insurance.id, patientUser.id);
        }

        let plan = await Plan.findOne({ where: { 'insuranceId': insurance.id } });
        if (!plan && planId) { await this.createService.createPlan(planId, insurance.id, planName) }

        // REQUESTING DOCTOR
        let reqDoctorProfile, reqDoctorUser, reqDoctorUserSite, reqDoctor;
        if (reqDoctorName && reqDoctorDocType && reqDoctorDocIssuer && reqDoctorDocNum) {
            reqDoctor = await this.findDoctor(reqDoctorDocType, reqDoctorDocIssuer, reqDoctorDocNum);
            if (!reqDoctor) {
                const reqDoctorSocialName = reqDoctorName.split(" ")[0];
                reqDoctorProfile = await this.createService.createProfile(reqDoctorSocialName, reqDoctorName, null, null, null, null);
                reqDoctor = await this.createService.createDoctor(reqDoctorProfile.id, reqDoctorDocType, reqDoctorDocIssuer, reqDoctorDocNum);
                reqDoctorUser = await this.createService.createUser(reqDoctorProfile.id, null, 'DOCTOR', null, null, null, null);
                reqDoctorUserSite = await this.createService.createUserSite(reqDoctorUser.id, siteId, createdBy);
            }
            await this.createLogin(reqDoctorUser, reqDoctor);
        }


        // CONSULTING DOCTOR
        let consDoctorProfile, consDoctorUser, consDoctorUserSite, consDoctor;
        if (consDoctorName && consDoctorDocType && consDoctorDocIssuer && consDoctorDocNum) {
            consDoctor = await this.findDoctor(consDoctorDocType, consDoctorDocIssuer, consDoctorDocNum);
            if (!consDoctor) {
                const consDoctorSocialName = consDoctorName.split(" ")[0];
                consDoctorProfile = await this.createService.createProfile(consDoctorSocialName, consDoctorName, null, null, null, null);
                consDoctor = await this.createService.createDoctor(consDoctorProfile.id, consDoctorDocType, consDoctorDocIssuer, consDoctorDocNum);
                consDoctorUser = await this.createService.createUser(consDoctorProfile.id, null, 'DOCTOR', null, null, null, null);
                consDoctorUserSite = await this.createService.createUserSite(consDoctorUser.id, siteId, createdBy);
            }
            await this.createLogin(consDoctorUser, consDoctor);
        }

        // Once you have all the information, create an exam
        let reqDoctorId, consDoctorId
        if (reqDoctor) {
            reqDoctorId = reqDoctor.id;
        }
        if (consDoctor) {
            consDoctorId = consDoctor.id;
        }

        const exam = await this.createExam(
            patientId, accessionNum, studyInstanceUID, networkId, siteId,
            modality, reqProcDescription, studyDate, statusType, patient.id,
            reqDoctorId, consDoctorId, insurance.id, null, null);

        await this.createService.createLogExam(exam.id);
    }

    // Check if user exists
    async createdBy(loginId: number) {
        try {
            let login = await Login.findByPk(loginId);
            let user = await User.findByPk(login.userId);
            return user.id;
        }
        catch (err) {
            throw new Error('User does not exist');
        }
    }

    // Check if site exists
    async siteExists(networkId: string) {
        try {
            let site = await Site.findOne({
                where: {
                    'networkId': networkId
                }
            });
            return site.id;
        } catch (err) {
            throw new Error('Site does not exist');
        }
    }

    async createLogin(user: User, doctor, password = null, username = null) {
        if (!user) {
            return null;
        }
        if (!password) {
            let profile = await Profile.findByPk(user.profileId);
            username = doctor.docNum;
            password = doctor.docNum + '@' + profile.socialName;
        }
        await this.createService.createLogin(user.id, username, password);
    }

    async findDoctor(type, issuer, num) {
        let doctor = await Doctor.findOne({
            where: {
                'docType': type,
                'docIssuer': issuer,
                'docNum': num
            }
        });
        return doctor;
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
            const login = await Login.findByPk(token.id);
            const user = await User.findByPk(login.userId);
            const userSite = await UserSite.findOne({ where: { userId: user.id } });

            const profiles = user.profiles.trim();
            const profileId = user.profileId;
            if (profiles === 'PATIENT') {
                const patient = await Patient.findOne({ where: { profileId } });
                exams = await this.find({ 'patientId': patient.id })
            } else if (profiles === 'DOCTOR') {
                const doctor = await Doctor.findOne({ where: { profileId } });
                exams = await this.find({ [Op.or]: [{ 'requestingId': doctor.id }, { 'consultingId': doctor.id }] });
            } else if (profiles === 'ADMIN') {
                const userSite = await UserSite.findOne({ where: { userId: user.id } });
                exams = await this.find({ 'siteId': userSite.siteId })
            }
            console.log(exams.length);
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

    async findOne(where: any, token) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const exam = await this.examRepository.findOne({
            where: where,
            include: [Site, Patient, Insurance, Views, { model: Doctor, as: 'requestingDoctor' }, { model: Doctor, as: 'consultingDoctor' }]
        });

        const viewer = await this.createdBy(token.id);
        const view = await this.createService.createViews(exam.id, viewer, null);
        exam.views.push(view);

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
