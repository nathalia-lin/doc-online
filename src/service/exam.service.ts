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

import User from '../models/user.model';
import Site from '../models/site.model';
import Patient from '../models/patient.model';
import Doctor from '../models/doctor.model';
import Insurance from '../models/insurance.model';
import Views from '../models/views.model';
import Exam from '../models/exam.model';

import { CreateExamDto } from '../dto/exam.dto';
import { CreateProfileDto } from 'src/dto/profile.dto';
import { CreatePatientDto } from 'src/dto/patient.dto';
import { CreateDoctorDto } from 'src/dto/doctor.dto';
import { CreateUserDto } from 'src/dto/user.dto';
import { CreateUserSiteDto } from 'src/dto/userSite.dto';
import { CreateLoginDto } from 'src/dto/login.dto';
import { CreateInsuranceDto } from 'src/dto/insurance.dto';
import { CreateUserInsuranceDto } from 'src/dto/userInsurance.dto';

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
    ) { }

    async create(createExamDto: CreateExamDto): Promise<Exam> {
        try {
            return await this.examRepository.create<Exam>(createExamDto);
        }
        catch (err) {
            console.log(err)
        }
    }

    async createRelation(
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
        // planID, - createmodel
        // planName, - createmodel
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

        let newProfile, newUser, newUserSite;

        // Check if the site exists
        let siteId = await this.siteExists(networkId);

        // Check if patient and doctors exist
        let patient = await this.patientService.find({ 'id': patientId })[0];
        let reqDoctor = await this.doctorService.find({
            'docType': reqDoctorDocType,
            'docIssuer': reqDoctorDocIssuer,
            'docNum': reqDoctorDocNum
        })[0];
        let consDoctor;
        if (consDoctorName) {
            consDoctor = await this.doctorService.find({
                'docNum': consDoctorDocNum
            })[0];
        }

        // PATIENT
        if (!patient) {
            newProfile = await this.createProfile(name, socialName, sex, birthDate, null, null);
            patient = await this.createPatient(patientId, newProfile, null);
            newUser = await this.createUser(newProfile, null, null, null, null, null, null, null, null);
            newUserSite = await this.createUserSite(newUser, siteId, null, null);
        }

        // Create patient login
        let login = {
            'userId': newUser.id,
            'username': loginUsername,
            'password': loginPassword
        } as CreateLoginDto;
        await this.loginService.create(login);

        // After creating a patient, check if they have an insurance
        let insurance = await this.insuranceService.find({ 'id': insuranceId })[0];

        // If not
        if (!insurance) {
            // Create an insurance and user insurance
            insurance = {
                'id': insuranceId,
                'siteId': siteId,
                'name': insuranceName
            } as CreateInsuranceDto;
            await this.insuranceService.create(insurance);
            
            let userInsurance = {
                'insuranceId': insuranceId,
                'userId': newUser.id,
            } as CreateUserInsuranceDto;
            await this.userInsuranceService.create(userInsurance);
        }

        // REQUESTING DOCTOR
        if (!reqDoctor) {
            const reqDoctorSocialName = reqDoctorName.split(" ")[0];
            newProfile = await this.createProfile(reqDoctorName, reqDoctorSocialName, null, null, null, null);
            reqDoctor = await this.createDoctor(newProfile, reqDoctorDocType, reqDoctorDocIssuer, reqDoctorDocNum);
            newUser = await this.createUser(newProfile, null, null, null, null, null, null, null, null);
            newUserSite = await this.createUserSite(newUser, siteId, null, null);
        }
        await this.createDoctorLogin(newUser, reqDoctor);

        // CONSULTING DOCTOR
        // If there is a consulting doctor and he isn't in the database, create a profile and doctor
        let consDoctorId;
        if (consDoctorName) {
            if (!consDoctor) {
                const consDoctorSocialName = consDoctorName.split(" ")[0];
                newProfile = await this.createProfile(consDoctorName, consDoctorSocialName, null, null, null, null);
                consDoctor = await this.createDoctor(newProfile, null, null, consDoctorDocNum);
                newUser = await this.createUser(newProfile, null, null, null, null, null, null, null, null);
                newUserSite = await this.createUserSite(newUser, siteId, null, null);
            }
            consDoctorId = consDoctor.id
            await this.createDoctorLogin(newUser, consDoctor);
        } else {
            consDoctorId = null;
        }

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
        await this.examRepository.create(exam);
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

    // Create profile
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

    // Create patient
    async createPatient(id, profileId, pid) {
        let newPatient = {
            'id': id,
            'profileId': profileId.id,
            'pid': pid,
        } as CreatePatientDto;
        return await this.patientService.create(newPatient);
    }

    // Create doctor
    async createDoctor(profileId, docType, docIssuer, docNum) {
        let newDoctor = {
            'profileId': profileId.id,
            'docType': docType,
            'docIssuer': docIssuer,
            'docNum': docNum,
        } as CreateDoctorDto;
        return await this.doctorService.create(newDoctor);
    }

    // Create user
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

    // Create user site login
    async createUserSite(user, siteId, createdBy, createdAt) {
        let newUserSite = {
            'userId': user.id,
            'siteId': siteId,
            'createdBy': createdBy,
            'createdAt': createdAt
        } as CreateUserSiteDto;
        return await this.userSiteService.create(newUserSite)
    };

    // Create doctor login
    async createDoctorLogin(user: User, doctor: Doctor) {
        let profile = await this.profileService.find({
            'id': doctor.profileId
        })
        let login = {
            'userId': user.id,
            'username': doctor.docNum,
            'password': doctor.docNum + '@' + profile[0].socialName
        } as CreateLoginDto;
        await this.loginService.create(login);
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
