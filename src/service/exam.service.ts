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
    ) { }

    async create(
        networkId: string,
        studyInstanceUID: string,
        studyDate: Date,
        accessionNum: string,
        // admissionID,
        // orderID,
        modality: string,
        statusType: string,
        // reqProcID,
        // reqProcDate,
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
        reqDoctorDocType: string,
        reqDoctorDocNum: string,
        reqDoctorDocIssuer: string,
        reqDoctorName: string,
        loginUsername: string,
        loginPassword: string,
        // reportextension,
        // report,
        // reportDate,
        consDoctorDocNum: string,
        consDoctorName: string,
        // reviewedBy,
        // echo
    ) {

        // Check if the site exists
        let siteId = await this.siteExists(networkId);

        // PATIENT
        let patientProfile, patientUser, patientUserSite;
        let patient = await this.patientService.find(patientId)[0];
        if (!patient) {
            patientProfile = await this.createProfile(name, socialName, sex, birthDate, null, null);
            patient = await this.createPatient(patientId, patientProfile, null);
            patientUser = await this.createUser(patientProfile, null, null, null, null, null, null, null, null);
            patientUserSite = await this.createUserSite(patientUser, siteId, null, null);
        }
        await this.createLogin(patientUser, null, loginUsername, loginPassword);

        let insurance = await this.insuranceService.find(insuranceId)[0];
        if (!insurance) {await this.createInsurance(insuranceId, siteId, insuranceName, patientUser.id)}

        let plan = await this.planService.find({ 'insuranceId': insuranceId })[0];
        if (!plan) {await this.createPlan(planId, insuranceId, planName)}

        // REQUESTING DOCTOR
        let reqDoctorProfile, reqDoctorUser, reqDoctorUserSite;
        let reqDoctor = await this.doctorService.find({
            'docType': reqDoctorDocType,
            'docIssuer': reqDoctorDocIssuer,
            'docNum': reqDoctorDocNum
        })[0];

        if (!reqDoctor) {
            const reqDoctorSocialName = reqDoctorName.split(" ")[0];
            reqDoctorProfile = await this.createProfile(reqDoctorName, reqDoctorSocialName, null, null, null, null);
            reqDoctor = await this.createDoctor(reqDoctorProfile, reqDoctorDocType, reqDoctorDocIssuer, reqDoctorDocNum);
            reqDoctorUser = await this.createUser(reqDoctorProfile, null, null, null, null, null, null, null, null);
            reqDoctorUserSite = await this.createUserSite(reqDoctorUser, siteId, null, null);
        }
        await this.createLogin(reqDoctorUser, reqDoctor);

        // CONSULTING DOCTOR
        let consDoctorProfile, consDoctorUser, consDoctorUserSite;
        let consDoctor = await this.doctorService.find({ 'docNum': consDoctorDocNum })[0];
        if (consDoctorName && !consDoctor) {
            const consDoctorSocialName = consDoctorName.split(" ")[0];
            consDoctorProfile = await this.createProfile(consDoctorName, consDoctorSocialName, null, null, null, null);
            consDoctor = await this.createDoctor(consDoctorProfile, null, null, consDoctorDocNum);
            consDoctorUser = await this.createUser(consDoctorProfile, null, null, null, null, null, null, null, null);
            consDoctorUserSite = await this.createUserSite(consDoctorUser, siteId, null, null);
        }
        let consDoctorId = await this.getConsDoctorId(consDoctorName, consDoctor);
        await this.createLogin(consDoctorUser, consDoctor);

        // Once you have all the information, create an exam
        let exam = {
            'createdAt': null,
            'updatedAt': null,
            'pid': null,
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
    }

    // Check if site exists
    async siteExists(networkId: string) {
        let site = await this.siteService.find({
            'networkId': networkId
        });
        if (site.length > 1) {
            throw new Error('Too many sites');
        } else if (site.length == 1) {
            return site[0].id;
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

    async createUser(profileId, createdAt, createdBy, lastAccess, profiles, active, recoveryKey, lastRecovery, termApproved) {
        let newUser = {
            'profileId': profileId.id,
            'createdAt': createdAt,
            'updatedAt': createdBy,
            'lastAccess': lastAccess,
            'profiles': profiles,
            'active': active,
            'recoveryKey': recoveryKey,
            'lastRecovery': lastRecovery,
            'termApproved': termApproved
        } as CreateUserDto;
        return await this.userService.create(newUser);
    }

    async createUserSite(user, siteId, createdBy, createdAt) {
        let newUserSite = {
            'userId': user.id,
            'siteId': siteId,
            'createdBy': createdBy,
            'createdAt': createdAt
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
        let profile = await this.profileService.find({ 'id': user.profileId })
        if (typeof doctor === typeof Doctor) {
            username = doctor.docNum;
            password = doctor.docNum + '@' + profile[0].socialName;
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

    async createExam(createExamDto: CreateExamDto): Promise<Exam> {
        return await this.examRepository.create<Exam>(createExamDto);
    }

    async find(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where };
        }
        const exam = await this.examRepository.find({
            where: where, include: [Site, Patient, Doctor, Insurance, Views]
        });
        return exam;
    }

    async deleteOne(examId: number) {
        const deletedExam = await this.examRepository.destroy({
            where: { 'id': examId }
        });
        return await deletedExam;
    }
}
