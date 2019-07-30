import { Injectable } from '@nestjs/common';

import { CreateDoctorDto } from '../dto/doctor.dto';
import { CreateInsuranceDto } from '../dto/insurance.dto';
import { CreateLogExamDto } from '../dto/logExam.dto';
import { CreateLoginDto } from '../dto/login.dto';
import { CreatePatientDto } from '../dto/patient.dto';
import { CreatePlanDto } from '../dto/plan.dto';
import { CreateProfileDto } from '../dto/profile.dto';
import { CreateUserDto } from '../dto/user.dto';
import { CreateUserInsuranceDto } from '../dto/userInsurance.dto';
import { CreateUserSiteDto } from '../dto/userSite.dto';

import Doctor from '../models/doctor.model';
import Insurance from '../models/insurance.model';
import LogExam from '../models/logExam.model';
import Login from '../models/login.model';
import Patient from '../models/patient.model';
import Plan from '../models/plan.model';
import Profile from '../models/profile.model';
import User from '../models/user.model';
import UserInsurance from '../models/userInsurance.model';
import UserSite from '../models/userSite.model';

@Injectable()
export class CreateService {

    async createDoctor(profileId, docType, docIssuer, docNum) {
        let newDoctor = {
            'profileId': profileId.id,
            'docType': docType,
            'docIssuer': docIssuer,
            'docNum': docNum,
        } as CreateDoctorDto;
        return await Doctor.create(newDoctor);
    }

    async createInsurance(insuranceId, siteId, insuranceName) {
        let insurance = {
            'id': insuranceId,
            'siteId': siteId,
            'name': insuranceName
        } as CreateInsuranceDto;
        await Insurance.create(insurance);
    }

    async createLogExam(examId) {
        let logExam = {
            'examId': examId,
            'postedData': null
        } as CreateLogExamDto;
        await LogExam.create(logExam);
    }

    async createLogin(userId, username, password) {
        let login = {
            'userId': userId,
            'username': username,
            'password': password
        } as CreateLoginDto;
        await Login.create(login);
    }

    async createPatient(id: number, profileId: number, pid: string) {
        let newPatient = {
            'id': id,
            'profileId': profileId,
            'pid': pid,
        } as CreatePatientDto;
        return await Patient.create(newPatient);
    }

    async createPlan(planId, insuranceId, planName) {
        let plan = {
            'id': planId,
            'insuranceId': insuranceId,
            'name': planName
        } as CreatePlanDto;
        await Plan.create(plan);
    }

    async createProfile(socialName: string, name: string, sex: string, birthdate: Date, phone: string, email: string) {
        let newProfile = {
          'name': name,
          'socialName': socialName,
          'sex': sex,
          'birthdate': birthdate,
          'phone': phone,
          'email': email
        } as CreateProfileDto;
        return await Profile.create(newProfile);
      }

      async createUser(profileId, lastAccess, profiles, active, recoveryKey, lastRecovery, termApproved) {
        let newUser = {
            'profileId': profileId,
            'lastAccess': lastAccess,
            'profiles': profiles,
            'active': active,
            'recoveryKey': recoveryKey,
            'lastRecovery': lastRecovery,
            'termApproved': termApproved
        } as CreateUserDto;
        return await User.create(newUser);
    }

    async createUserInsurance(insuranceId, userId) {
        let userInsurance = {
            'insuranceId': insuranceId,
            'userId': userId,
        } as CreateUserInsuranceDto;
        await UserInsurance.create(userInsurance);
    }

    async createUserSite(userId, siteId, createdBy) {
        let newUserSite = {
            'userId': userId,
            'siteId': siteId,
            'createdBy': createdBy,
        } as CreateUserSiteDto;
        return await UserSite.create(newUserSite)
    };
}