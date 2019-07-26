import { Injectable, Inject } from '@nestjs/common';

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
import { CreateProfileDto } from '../dto/profile.dto';
import { CreatePatientDto } from '../dto/patient.dto';
import { CreateDoctorDto } from '../dto/doctor.dto';
import { CreateUserDto } from '../dto/user.dto';
import { CreateUserSiteDto } from '../dto/userSite.dto';
import { CreateLoginDto } from '../dto/login.dto';
import { CreateInsuranceDto } from '../dto/insurance.dto';
import { CreateUserInsuranceDto } from '../dto/userInsurance.dto';
import { CreatePlanDto } from '../dto/plan.dto';
import { CreateLogExamDto } from '../dto/logExam.dto';
import { CreateFilterDto } from 'src/dto/filter.dto';
import { Op } from 'sequelize';

@Injectable()
export class ExamService {

    constructor(
        @Inject('ExamRepository') private readonly examRepository: typeof Exam,
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

        // Check if user exists
        let createdBy = await this.createdBy(token.id);
        // Check if the site exists
        let siteId = await this.siteExists(networkId);

        // PATIENT
        let patientProfile, patientUser, patientUserSite;
        let patient = await this.patientService.findOne(patientId);
        if (!patient) {
            // é possível ter um profile sem ser um paciente? Precisa find profile primeiro antes de criar?
            patientProfile = await this.createProfile(name, socialName, sex, birthDate, phone, email);
            patient = await this.createPatient(patientId, patientProfile, pid);
            patientUser = await this.createUser(patientProfile, null, 'PATIENT', null, null, null, null);
            patientUserSite = await this.createUserSite(patientUser, siteId, createdBy);
        }
        await this.createLogin(patientUser, null, loginPassword, loginUsername);

        let insurance = await this.insuranceService.findOne(insuranceId);
        if (!insurance) { await this.createInsurance(insuranceId, siteId, insuranceName, patientUser.id) }

        let plan = await this.planService.findOne({ 'insuranceId': insuranceId });
        if (!plan) { await this.createPlan(planId, insuranceId, planName) }

        // REQUESTING DOCTOR
        let reqDoctorProfile, reqDoctorUser, reqDoctorUserSite;
        let reqDoctor = await this.doctorService.findOne({
            'docType': reqDoctorDocType,
            'docIssuer': reqDoctorDocIssuer,
            'docNum': reqDoctorDocNum
        });

        if (!reqDoctor) {
            const reqDoctorSocialName = reqDoctorName.split(" ")[0];
            reqDoctorProfile = await this.createProfile(reqDoctorName, reqDoctorSocialName, null, null, null, null);
            reqDoctor = await this.createDoctor(reqDoctorProfile, reqDoctorDocType, reqDoctorDocIssuer, reqDoctorDocNum);
            reqDoctorUser = await this.createUser(reqDoctorProfile, null, 'DOCTOR', null, null, null, null);
            reqDoctorUserSite = await this.createUserSite(reqDoctorUser, siteId, createdBy);
        }
        await this.createLogin(reqDoctorUser, reqDoctor);

        // CONSULTING DOCTOR
        let consDoctorProfile, consDoctorUser, consDoctorUserSite;
        let consDoctor = await this.doctorService.findOne({ 'docNum': consDoctorDocNum });
        if (consDoctorName && !consDoctor) {
            const consDoctorSocialName = consDoctorName.split(" ")[0];
            consDoctorProfile = await this.createProfile(consDoctorName, consDoctorSocialName, null, null, null, null);
            consDoctor = await this.createDoctor(consDoctorProfile, consDoctorDocType, consDoctorDocIssuer, consDoctorDocNum);
            consDoctorUser = await this.createUser(consDoctorProfile, null, 'DOCTOR', null, null, null, null);
            consDoctorUserSite = await this.createUserSite(consDoctorUser, siteId, createdBy);
        }
        let consDoctorId = await this.getConsDoctorId(consDoctorName, consDoctor);
        await this.createLogin(consDoctorUser, consDoctor);

        // Once you have all the information, create an exam
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
            'requestingId': reqDoctor.id,
            'consultingId': consDoctorId,
            'insuranceId': insuranceId,
            'lastReportView': null,
            'lastImageView': null,
        } as CreateExamDto;
        await this.createExam(exam);

        await this.createLogExam(exam.id);
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

    async createProfile(name, socialName, sex, birthdate, phone, email) {
        let newProfile = {
            'name': name,
            'socialName': socialName,
            'sex': sex,
            'birthdate': birthdate,
            'phone': phone,
            'email': email
        } as CreateProfileDto;
        return await this.profileService.create(newProfile);
    }

    async createPatient(id, profileId, pid) {
        let newPatient = {
            'id': id,
            'profileId': profileId.id,
            'pid': pid,
        } as CreatePatientDto;
        return await this.patientService.create(newPatient);
    }

    async createDoctor(profileId, docType, docIssuer, docNum) {
        let newDoctor = {
            'profileId': profileId.id,
            'docType': docType,
            'docIssuer': docIssuer,
            'docNum': docNum,
        } as CreateDoctorDto;
        return await this.doctorService.create(newDoctor);
    }

    async createUser(profileId, lastAccess, profiles, active, recoveryKey, lastRecovery, termApproved) {
        let newUser = {
            'profileId': profileId.id,
            'lastAccess': lastAccess,
            'profiles': profiles,
            'active': active,
            'recoveryKey': recoveryKey,
            'lastRecovery': lastRecovery,
            'termApproved': termApproved
        } as CreateUserDto;
        return await this.userService.create(newUser);
    }

    async createUserSite(user, siteId, createdBy) {
        let newUserSite = {
            'userId': user.id,
            'siteId': siteId,
            'createdBy': createdBy,
        } as CreateUserSiteDto;
        return await this.userSiteService.create(newUserSite)
    };

    async createInsurance(insuranceId, siteId, insuranceName, userId) {
        let insurance = {
            'id': insuranceId,
            'siteId': siteId,
            'name': insuranceName
        } as CreateInsuranceDto;
        await this.insuranceService.create(insurance);

        let userInsurance = {
            'insuranceId': insuranceId,
            'userId': userId,
        } as CreateUserInsuranceDto;
        await this.userInsuranceService.create(userInsurance);
    };

    async createPlan(planId, insuranceId, planName) {
        let plan = {
            'id': planId,
            'insuranceId': insuranceId,
            'name': planName
        } as CreatePlanDto;
        await this.planService.create(plan);
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
        let login = {
            'userId': user.id,
            'username': username,
            'password': password
        } as CreateLoginDto;
        await this.loginService.create(login);
    }

    async getConsDoctorId(consDoctorName, consDoctor) {
        if (consDoctorName) {
            return consDoctor.id;
        }
        return null;
    }

    async createLogExam(examId) {
        let logExam = {
            'examId': examId,
            'postedData': null
        } as CreateLogExamDto;
        await this.logExamService.create(logExam);
    }

    // ========================================================================================================

    public async search(body: CreateFilterDto, token) {
        const where = {};
        body.filters.forEach(field => {
            where[field['key']] = field['value']
        })
        let exams = await this.find({ ...where });

        const login = await this.loginService.findOne(token.id);
        const user = await this.userService.findOne(login.userId);
        if (exams.length > 0) {
            exams = await this.filterByProfiles(exams, user);
        }
        return exams;
    }

    public async filterByProfiles(exams, user: User) {
        const profiles = user.profiles.trim();
        const profileId = user.profileId;
        if (profiles === 'patient') {
            console.log('patient')
            const patient = await this.patientService.findOne({ profileId });
            exams = await this.find({ 'patientId': patient.id })
        } else if (profiles === 'doctor') {
            const doctor = await this.doctorService.findOne({ profileId });
            exams = await this.find({ [Op.or]: [{ 'requestingId': doctor.id }, { 'consultingId': doctor.id }] });
        } else if (profiles === 'admin') {
            // show all by site(?)
        }
        return exams
    }

    // ========================================================================================================

    async createExam(createExamDto: CreateExamDto): Promise<Exam> {
        return await this.examRepository.create<Exam>(createExamDto);
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
        const exam = await this.examRepository.findAll({
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
