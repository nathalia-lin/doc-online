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

import { CreateFilterDto } from '../dto/filter.dto';
import { CreateService } from './create.service';

@Injectable()
export class ExamService {

    constructor(
        @Inject('ExamRepository') private readonly examRepository: typeof Exam,
        @Inject('CreateService') private createService: CreateService,
    ) { }

    /**
     * Creates an exam and all the relationships 
     */
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

        let createdBy = await this.createdBy(token.id);
        let siteId = await this.siteExists(networkId);

        if (!patientId) { throw new NotFoundException('Patient not found') }
        
        // If patient does not exist, creates a profile, patient, user, user site, and login
        // Else, then just creates a login
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

        // If insurance does not exist, creates an insurance and user insurance
        let insurance = await Insurance.findOne({ where: { 'insuranceId': insuranceId } });
        if (!insurance && insuranceId) {
            insurance = await this.createService.createInsurance(insuranceId, siteId, insuranceName);
            await this.createService.createUserInsurance(insurance.id, patientUser.id);
        }

        // If plan does not exist, creates a plan
        let plan = await Plan.findOne({ where: { 'insuranceId': insurance.id } });
        if (!plan && planId) { await this.createService.createPlan(planId, insurance.id, planName) }

        // If there are all the required doctor information
        // Look for a doctor in the database
        // If doctor does not exist, then create a profile, doctor, user, user site, and login
        // Else, then just creates a login
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

        // same thing as requesting doctor
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

        // If doctors exist, get their id
        let reqDoctorId, consDoctorId
        if (reqDoctor) { reqDoctorId = reqDoctor.id }
        if (consDoctor) { consDoctorId = consDoctor.id }

        // Once you have all the information, create an exam
        const exam = await this.createService.createExam(
            patientId, accessionNum, studyInstanceUID, networkId, siteId,
            modality, reqProcDescription, studyDate, statusType, patient.id,
            reqDoctorId, consDoctorId, insurance.id, null, null);

        await this.createService.createLogExam(exam.id);
    }

    /**
     * Grabs the loginId from the token and returns the userId
    */ 
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

    /**
     * Check if site exists
     * Throws error if site does not exist
    */ 
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

    /**
     * Creates login for patient and doctor
     */
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

    /**
     * Filters input
     * @example
     * Post /exam/search
     * {
     *      filters: [{key: networkId, value: MODELO1}],
     *      page: 1,
     *      limit: 1
     * }
     */
    public async search(body: CreateFilterDto, token) {
        const where = {};
        body.filters.forEach(field => {
            // what if you filter through same key, but different values?
            where[field['key']] = field['value'];
        })
        let exams = await this.find({ ...where });

        // filter based on the token
        if (exams.length > 0) {
            const login = await Login.findByPk(token.id);
            const user = await User.findByPk(login.userId);
            const userSite = await UserSite.findOne({ where: { userId: user.id } });

            const profiles = user.profiles.trim();
            const profileId = user.profileId;
            if (profiles === 'PATIENT') {
                // patient can only see their own exams
                const patient = await Patient.findOne({ where: { profileId } });
                exams = await this.find({ 'patientId': patient.id })
            } else if (profiles === 'DOCTOR') {
                // doctor can see their requested and consulted exams
                const doctor = await Doctor.findOne({ where: { profileId } });
                exams = await this.find({ [Op.or]: [{ 'requestingId': doctor.id }, { 'consultingId': doctor.id }] });
            } else if (profiles === 'ADMIN') {
                // admin can see all the exams from one site
                const userSite = await UserSite.findOne({ where: { userId: user.id } });
                exams = await this.find({ 'siteId': userSite.siteId })
            }
        }
        return exams;
    }

    // ========================================================================================================

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
