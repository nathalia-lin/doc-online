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
const site_model_1 = __importDefault(require("src/models/site.model"));
const patient_model_1 = __importDefault(require("src/models/patient.model"));
const doctor_model_1 = __importDefault(require("src/models/doctor.model"));
const insurance_model_1 = __importDefault(require("src/models/insurance.model"));
const views_model_1 = __importDefault(require("src/models/views.model"));
const profile_model_1 = __importDefault(require("src/models/profile.model"));
const profile_service_1 = require("./profile.service");
const user_model_1 = __importDefault(require("src/models/user.model"));
const login_model_1 = __importDefault(require("src/models/login.model"));
const userSite_model_1 = __importDefault(require("src/models/userSite.model"));
let InputService = class InputService {
    constructor(examRepository, profileService, siteRepository) {
        this.examRepository = examRepository;
        this.profileService = profileService;
        this.siteRepository = siteRepository;
    }
    create(examId, pid, accessionNum, studyInstanceUID, networkId, modality, description, examDate, statusType, lastReportView, lastImageView, examCreatedAt, examUpdatedAt, profileId, profileFirstName, profileLastName, profileSex, profileBirthDate, profilePhone, profileEmail, userId, userProfiles, userCreatedAt, userUpdatedAt, userAccessedAt, userActive, userLastRecovery, userRecoveryKey, userTermApproved, loginUsername, loginPassword, userSiteCreatedAt, userSiteCreatedBy, patientId, patientPid, reqDoctorId, reqDoctorDocType, reqDoctorDocIssuer, reqDoctorDocNum, insuranceId, insuranceName) {
        return __awaiter(this, void 0, void 0, function* () {
            const site = yield this.siteRepository.findOne({
                where: { 'networkId': networkId }
            });
            const siteId = site.id;
            const profile = profile_model_1.default.create({
                'id': profileId,
                'firstName': profileFirstName,
                'lastName': profileLastName,
                'sex': profileSex,
                'birthDate': profileBirthDate,
                'phone': profilePhone,
                'email': profileEmail
            });
            const user = user_model_1.default.create({
                'id': userId,
                'profile': userProfiles,
                'createdAt': userCreatedAt,
                'updatedAt': userUpdatedAt,
                'accessedAt': userAccessedAt,
                'active': userActive,
                'lastRecovery': userLastRecovery,
                'recoveryKey': userRecoveryKey,
                'termApproved': userTermApproved
            });
            const userSite = userSite_model_1.default.create({
                'userId': userId,
                'siteId': siteId,
                'createdAt': userSiteCreatedAt,
                'createdBy': userSiteCreatedBy
            });
            const login = login_model_1.default.create({
                'username': loginUsername,
                'password': loginPassword
            });
            const patient = patient_model_1.default.create({});
            const newExam = yield this.examRepository.create({
                examId,
                pid,
                accessionNum,
                studyInstanceUID,
                networkId,
                siteId,
                modality,
                description,
                examDate,
                statusType,
                patientId,
                requestingId,
                consultingId,
                insuranceId,
                lastReportView,
                lastImageView
            });
            return newExam;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.examRepository.findAll();
        });
    }
    findOne(examId) {
        return __awaiter(this, void 0, void 0, function* () {
            const exam = yield this.examRepository.findOne({
                where: { 'id': examId }, include: [site_model_1.default, patient_model_1.default, doctor_model_1.default, insurance_model_1.default, views_model_1.default]
            });
            return exam;
        });
    }
    deleteOne(examId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedExam = yield this.examRepository.destroy({
                where: { 'id': examId }
            });
            return yield deletedExam;
        });
    }
};
InputService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('ExamRepository')),
    __param(1, common_1.Inject('ProfileService')),
    __param(2, common_1.Inject('SiteRepository')),
    __metadata("design:paramtypes", [Object, profile_service_1.ProfileService, Object])
], InputService);
exports.InputService = InputService;
