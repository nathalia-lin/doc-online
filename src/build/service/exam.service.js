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
const site_service_1 = require("./site.service");
const profile_service_1 = require("./profile.service");
const patient_service_1 = require("./patient.service");
const doctor_service_1 = require("./doctor.service");
const user_service_1 = require("./user.service");
const userSite_service_1 = require("./userSite.service");
const login_service_1 = require("./login.service");
const userInsurance_service_1 = require("./userInsurance.service");
const insurance_service_1 = require("./insurance.service");
const plan_service_1 = require("./plan.service");
const site_model_1 = __importDefault(require("../models/site.model"));
const patient_model_1 = __importDefault(require("../models/patient.model"));
const doctor_model_1 = __importDefault(require("../models/doctor.model"));
const insurance_model_1 = __importDefault(require("../models/insurance.model"));
const views_model_1 = __importDefault(require("../models/views.model"));
let ExamService = class ExamService {
    constructor(examRepository, siteService, profileService, patientService, doctorService, userService, userSiteService, loginService, insuranceService, userInsuranceService, planService) {
        this.examRepository = examRepository;
        this.siteService = siteService;
        this.profileService = profileService;
        this.patientService = patientService;
        this.doctorService = doctorService;
        this.userService = userService;
        this.userSiteService = userSiteService;
        this.loginService = loginService;
        this.insuranceService = insuranceService;
        this.userInsuranceService = userInsuranceService;
        this.planService = planService;
    }
    create(networkId, studyInstanceUID, studyDate, accessionNum, modality, statusType, reqProcDescription, insuranceId, insuranceName, planId, planName, patientId, name, socialName, birthDate, sex, reqDoctorDocType, reqDoctorDocNum, reqDoctorDocIssuer, reqDoctorName, loginUsername, loginPassword, consDoctorDocNum, consDoctorName) {
        return __awaiter(this, void 0, void 0, function* () {
            let newProfile, newUser, newUserSite;
            let siteId = yield this.siteExists(networkId);
            let patient = yield this.patientService.find({ 'id': patientId })[0];
            let reqDoctor = yield this.doctorService.find({
                'docType': reqDoctorDocType,
                'docIssuer': reqDoctorDocIssuer,
                'docNum': reqDoctorDocNum
            })[0];
            let consDoctor;
            if (consDoctorName) {
                consDoctor = yield this.doctorService.find({
                    'docNum': consDoctorDocNum
                })[0];
            }
            if (!patient) {
                newProfile = yield this.createProfile(name, socialName, sex, birthDate, null, null);
                patient = yield this.createPatient(patientId, newProfile, null);
                newUser = yield this.createUser(newProfile, null, null, null, null, null, null, null, null);
                newUserSite = yield this.createUserSite(newUser, siteId, null, null);
            }
            let login = {
                'userId': newUser.id,
                'username': loginUsername,
                'password': loginPassword
            };
            yield this.loginService.create(login);
            let insurance = yield this.insuranceService.find({ 'id': insuranceId })[0];
            if (!insurance) {
                yield this.createInsurance(insuranceId, siteId, insuranceName, newUser.id);
            }
            let plan = yield this.planService.find({ 'insuranceId': insuranceId });
            if (!plan) {
                yield this.createPlan(planId, planName, insuranceId);
            }
            if (!reqDoctor) {
                const reqDoctorSocialName = reqDoctorName.split(" ")[0];
                newProfile = yield this.createProfile(reqDoctorName, reqDoctorSocialName, null, null, null, null);
                reqDoctor = yield this.createDoctor(newProfile, reqDoctorDocType, reqDoctorDocIssuer, reqDoctorDocNum);
                newUser = yield this.createUser(newProfile, null, null, null, null, null, null, null, null);
                newUserSite = yield this.createUserSite(newUser, siteId, null, null);
            }
            yield this.createDoctorLogin(newUser, reqDoctor);
            let consDoctorId;
            if (consDoctorName) {
                if (!consDoctor) {
                    const consDoctorSocialName = consDoctorName.split(" ")[0];
                    newProfile = yield this.createProfile(consDoctorName, consDoctorSocialName, null, null, null, null);
                    consDoctor = yield this.createDoctor(newProfile, null, null, consDoctorDocNum);
                    newUser = yield this.createUser(newProfile, null, null, null, null, null, null, null, null);
                    newUserSite = yield this.createUserSite(newUser, siteId, null, null);
                }
                consDoctorId = consDoctor.id;
                yield this.createDoctorLogin(newUser, consDoctor);
            }
            else {
                consDoctorId = null;
            }
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
            };
            yield this.createExam(exam);
        });
    }
    siteExists(networkId) {
        return __awaiter(this, void 0, void 0, function* () {
            let site = yield this.siteService.find({
                'networkId': networkId
            });
            if (site.length > 1) {
                throw new Error('Too many sites');
            }
            else if (site.length == 1) {
                return site[0].id;
            }
            else {
                throw new Error('Site does not exist');
            }
        });
    }
    createProfile(name, socialName, sex, birthdate, phone, email) {
        return __awaiter(this, void 0, void 0, function* () {
            let newProfile = {
                'name': name,
                'socialName': socialName,
                'sex': sex,
                'birthdate': birthdate,
                'phone': phone,
                'email': email
            };
            return yield this.profileService.create(newProfile);
        });
    }
    createPatient(id, profileId, pid) {
        return __awaiter(this, void 0, void 0, function* () {
            let newPatient = {
                'id': id,
                'profileId': profileId.id,
                'pid': pid,
            };
            return yield this.patientService.create(newPatient);
        });
    }
    createDoctor(profileId, docType, docIssuer, docNum) {
        return __awaiter(this, void 0, void 0, function* () {
            let newDoctor = {
                'profileId': profileId.id,
                'docType': docType,
                'docIssuer': docIssuer,
                'docNum': docNum,
            };
            return yield this.doctorService.create(newDoctor);
        });
    }
    createUser(profileId, createdAt, createdBy, lastAccess, profiles, active, recoveryKey, lastRecovery, termApproved) {
        return __awaiter(this, void 0, void 0, function* () {
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
            };
            return yield this.userService.create(newUser);
        });
    }
    createUserSite(user, siteId, createdBy, createdAt) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUserSite = {
                'userId': user.id,
                'siteId': siteId,
                'createdBy': createdBy,
                'createdAt': createdAt
            };
            return yield this.userSiteService.create(newUserSite);
        });
    }
    ;
    createInsurance(insuranceId, siteId, insuranceName, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let insurance = {
                'id': insuranceId,
                'siteId': siteId,
                'name': insuranceName
            };
            yield this.insuranceService.create(insurance);
            let userInsurance = {
                'insuranceId': insuranceId,
                'userId': userId,
            };
            yield this.userInsuranceService.create(userInsurance);
        });
    }
    ;
    createPlan(planId, insuranceId, planName) {
        return __awaiter(this, void 0, void 0, function* () {
            let plan = {
                'id': planId,
                'insuranceId': insuranceId,
                'name': planName
            };
            yield this.planService.create(plan);
        });
    }
    createDoctorLogin(user, doctor) {
        return __awaiter(this, void 0, void 0, function* () {
            let profile = yield this.profileService.find({
                'id': doctor.profileId
            });
            let login = {
                'userId': user.id,
                'username': doctor.docNum,
                'password': doctor.docNum + '@' + profile[0].socialName
            };
            yield this.loginService.create(login);
        });
    }
    createExam(createExamDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.examRepository.create(createExamDto);
        });
    }
    find(where) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof where === 'string') {
                where = { 'id': where };
            }
            const exam = yield this.examRepository.find({
                where: where, include: [site_model_1.default, patient_model_1.default, doctor_model_1.default, insurance_model_1.default, views_model_1.default]
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
ExamService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('ExamRepository')),
    __param(1, common_1.Inject('SiteService')),
    __param(2, common_1.Inject('ProfileService')),
    __param(3, common_1.Inject('PatientService')),
    __param(4, common_1.Inject('DoctorService')),
    __param(5, common_1.Inject('UserService')),
    __param(6, common_1.Inject('UserSiteService')),
    __param(7, common_1.Inject('LoginService')),
    __param(8, common_1.Inject('InsuranceService')),
    __param(9, common_1.Inject('UserInsuranceService')),
    __param(10, common_1.Inject('PlanService')),
    __metadata("design:paramtypes", [Object, site_service_1.SiteService,
        profile_service_1.ProfileService,
        patient_service_1.PatientService,
        doctor_service_1.DoctorService,
        user_service_1.UserService,
        userSite_service_1.UserSiteService,
        login_service_1.LoginService,
        insurance_service_1.InsuranceService,
        userInsurance_service_1.UserInsuranceService,
        plan_service_1.PlanService])
], ExamService);
exports.ExamService = ExamService;
