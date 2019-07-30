"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const user_model_1 = __importDefault(require("../models/user.model"));
const site_model_1 = __importDefault(require("../models/site.model"));
const patient_model_1 = __importDefault(require("../models/patient.model"));
const doctor_model_1 = __importDefault(require("../models/doctor.model"));
const insurance_model_1 = __importDefault(require("../models/insurance.model"));
const views_model_1 = __importDefault(require("../models/views.model"));
const exam_model_1 = __importDefault(require("../models/exam.model"));
const plan_model_1 = __importDefault(require("../models/plan.model"));
const login_model_1 = __importDefault(require("../models/login.model"));
const profile_model_1 = __importDefault(require("../models/profile.model"));
const userSite_model_1 = __importDefault(require("../models/userSite.model"));
const create_service_1 = require("./create.service");
let ExamService = class ExamService {
    constructor(createService) {
        this.createService = createService;
    }
    create(token, networkId, studyInstanceUID, studyDate, accessionNum, modality, statusType, reqProcDescription, insuranceId, insuranceName, planId, planName, patientId, name, socialName, birthDate, sex, phone, email, pid, loginUsername, loginPassword, reqDoctorDocType, reqDoctorDocNum, reqDoctorDocIssuer, reqDoctorName, consDoctorDocType, consDoctorDocNum, consDoctorDocIssuer, consDoctorName) {
        return __awaiter(this, void 0, void 0, function* () {
            let createdBy = yield this.createdBy(token.id);
            let siteId = yield this.siteExists(networkId);
            let patientProfile, patientUser, patientUserSite;
            let patient = yield patient_model_1.default.findByPk(patientId);
            if (!patient) {
                patientProfile = yield this.createService.createProfile(name, socialName, sex, birthDate, phone, email);
                patient = yield this.createService.createPatient(patientId, patientProfile.id, pid);
                patientUser = yield this.createService.createUser(patientProfile.id, null, 'PATIENT', null, null, null, null);
                patientUserSite = yield this.createService.createUserSite(patientUser, siteId, createdBy);
            }
            yield this.createLogin(patientUser, null, loginPassword, loginUsername);
            let insurance = yield insurance_model_1.default.findByPk(insuranceId);
            if (!insurance) {
                yield this.createService.createInsurance(insuranceId, siteId, insuranceName);
                yield this.createService.createUserInsurance(insuranceId, patientUser.id);
            }
            let plan = yield plan_model_1.default.findOne({ where: { 'insuranceId': insuranceId } });
            if (!plan) {
                yield this.createService.createPlan(planId, insuranceId, planName);
            }
            let reqDoctorProfile, reqDoctorUser, reqDoctorUserSite;
            let reqDoctor = yield doctor_model_1.default.findOne({
                where: {
                    'docType': reqDoctorDocType,
                    'docIssuer': reqDoctorDocIssuer,
                    'docNum': reqDoctorDocNum
                }
            });
            if (!reqDoctor) {
                const reqDoctorSocialName = reqDoctorName.split(" ")[0];
                reqDoctorProfile = yield this.createService.createProfile(reqDoctorName, reqDoctorSocialName, null, null, null, null);
                reqDoctor = yield this.createService.createDoctor(reqDoctorProfile.id, reqDoctorDocType, reqDoctorDocIssuer, reqDoctorDocNum);
                reqDoctorUser = yield this.createService.createUser(reqDoctorProfile.id, null, 'DOCTOR', null, null, null, null);
                reqDoctorUserSite = yield this.createService.createUserSite(reqDoctorUser, siteId, createdBy);
            }
            yield this.createLogin(reqDoctorUser, reqDoctor);
            let consDoctorProfile, consDoctorUser, consDoctorUserSite;
            let consDoctor = yield doctor_model_1.default.findOne({ where: { 'docNum': consDoctorDocNum } });
            if (consDoctorName && !consDoctor) {
                const consDoctorSocialName = consDoctorName.split(" ")[0];
                consDoctorProfile = yield this.createService.createProfile(consDoctorName, consDoctorSocialName, null, null, null, null);
                consDoctor = yield this.createService.createDoctor(consDoctorProfile.id, consDoctorDocType, consDoctorDocIssuer, consDoctorDocNum);
                consDoctorUser = yield this.createService.createUser(consDoctorProfile.id, null, 'DOCTOR', null, null, null, null);
                consDoctorUserSite = yield this.createService.createUserSite(consDoctorUser, siteId, createdBy);
            }
            let consDoctorId = yield this.getConsDoctorId(consDoctorName, consDoctor);
            yield this.createLogin(consDoctorUser, consDoctor);
            const exam = yield this.createExam(pid, accessionNum, studyInstanceUID, networkId, siteId, modality, reqProcDescription, studyDate, statusType, patientId, reqDoctor.id, consDoctorId, insuranceId, null, null);
            yield this.createService.createLogExam(exam.id);
        });
    }
    createdBy(loginId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (loginId) {
                let login = yield login_model_1.default.findByPk(loginId);
                let user = yield user_model_1.default.findByPk(login.userId);
                return user.id;
            }
            else {
                throw new Error('User does not exist');
            }
        });
    }
    siteExists(networkId) {
        return __awaiter(this, void 0, void 0, function* () {
            let site = yield site_model_1.default.findOne({
                where: {
                    'networkId': networkId
                }
            });
            if (site) {
                return site.id;
            }
            else {
                throw new Error('Site does not exist');
            }
        });
    }
    createLogin(user, doctor, password = null, username = null) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!user) {
                return null;
            }
            let profile = yield profile_model_1.default.findByPk(user.profileId);
            if (!password) {
                username = doctor.docNum;
                password = doctor.docNum + '@' + profile.socialName;
            }
            yield this.createService.createLogin(user.id, username, password);
        });
    }
    getConsDoctorId(consDoctorName, consDoctor) {
        return __awaiter(this, void 0, void 0, function* () {
            if (consDoctorName) {
                return consDoctor.id;
            }
            return null;
        });
    }
    search(body, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const where = {};
            body.filters.forEach(field => {
                where[field['key']] = field['value'];
            });
            let exams = yield this.find(Object.assign({}, where));
            if (exams.length > 0) {
                const login = yield login_model_1.default.findByPk(token.id);
                const user = yield user_model_1.default.findByPk(login.userId);
                const userSite = yield userSite_model_1.default.findOne({ where: { userId: user.id } });
                const profiles = user.profiles.trim();
                const profileId = user.profileId;
                if (profiles === 'PATIENT') {
                    const patient = yield patient_model_1.default.findOne({ where: { profileId } });
                    exams = yield this.find({ 'patientId': patient.id });
                }
                else if (profiles === 'DOCTOR') {
                    const doctor = yield doctor_model_1.default.findOne({ where: { profileId } });
                    exams = yield this.find({ [sequelize_1.Op.or]: [{ 'requestingId': doctor.id }, { 'consultingId': doctor.id }] });
                }
                else if (profiles === 'ADMIN') {
                    const userSite = yield userSite_model_1.default.findOne({ where: { userId: user.id } });
                    exams = yield this.find({ 'siteId': userSite.siteId });
                }
            }
            return exams;
        });
    }
    createExam(pid, accessionNum, studyInstanceUID, networkId, siteId, modality, reqProcDescription, studyDate, statusType, patientId, reqDoctorId, consDoctorId, insuranceId, lastReportView, lastImageView) {
        return __awaiter(this, void 0, void 0, function* () {
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
            };
            return yield exam_model_1.default.create(exam);
        });
    }
    find(where) {
        return __awaiter(this, void 0, void 0, function* () {
            const exams = yield exam_model_1.default.findAll({
                where: where,
                include: [site_model_1.default, patient_model_1.default, insurance_model_1.default, views_model_1.default, { model: doctor_model_1.default, as: 'requestingDoctor' }, { model: doctor_model_1.default, as: 'consultingDoctor' }]
            });
            return exams;
        });
    }
    findOne(where) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof where === 'string') {
                where = { 'id': where };
            }
            const exam = yield exam_model_1.default.findOne({
                where: where,
                include: [site_model_1.default, patient_model_1.default, insurance_model_1.default, views_model_1.default, { model: doctor_model_1.default, as: 'requestingDoctor' }, { model: doctor_model_1.default, as: 'consultingDoctor' }]
            });
            return exam;
        });
    }
    updateOne(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield exam_model_1.default.update(body, { where: { 'id': id } });
        });
    }
    deleteOne(examId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedExam = yield exam_model_1.default.destroy({
                where: { 'id': examId }
            });
            return yield deletedExam;
        });
    }
};
ExamService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('CreateService')),
    __metadata("design:paramtypes", [create_service_1.CreateService])
], ExamService);
exports.ExamService = ExamService;
