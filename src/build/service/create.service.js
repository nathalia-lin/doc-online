"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const doctor_model_1 = __importDefault(require("../models/doctor.model"));
const insurance_model_1 = __importDefault(require("../models/insurance.model"));
const logExam_model_1 = __importDefault(require("../models/logExam.model"));
const login_model_1 = __importDefault(require("../models/login.model"));
const patient_model_1 = __importDefault(require("../models/patient.model"));
const plan_model_1 = __importDefault(require("../models/plan.model"));
const profile_model_1 = __importDefault(require("../models/profile.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const userInsurance_model_1 = __importDefault(require("../models/userInsurance.model"));
const userSite_model_1 = __importDefault(require("../models/userSite.model"));
let CreateService = class CreateService {
    createDoctor(profileId, docType, docIssuer, docNum) {
        return __awaiter(this, void 0, void 0, function* () {
            let newDoctor = {
                'profileId': profileId.id,
                'docType': docType,
                'docIssuer': docIssuer,
                'docNum': docNum,
            };
            return yield doctor_model_1.default.create(newDoctor);
        });
    }
    createInsurance(insuranceId, siteId, insuranceName) {
        return __awaiter(this, void 0, void 0, function* () {
            let insurance = {
                'id': insuranceId,
                'siteId': siteId,
                'name': insuranceName
            };
            yield insurance_model_1.default.create(insurance);
        });
    }
    createLogExam(examId) {
        return __awaiter(this, void 0, void 0, function* () {
            let logExam = {
                'examId': examId,
                'postedData': null
            };
            yield logExam_model_1.default.create(logExam);
        });
    }
    createLogin(userId, username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let login = {
                'userId': userId,
                'username': username,
                'password': password
            };
            yield login_model_1.default.create(login);
        });
    }
    createPatient(id, profileId, pid) {
        return __awaiter(this, void 0, void 0, function* () {
            let newPatient = {
                'id': id,
                'profileId': profileId,
                'pid': pid,
            };
            return yield patient_model_1.default.create(newPatient);
        });
    }
    createPlan(planId, insuranceId, planName) {
        return __awaiter(this, void 0, void 0, function* () {
            let plan = {
                'id': planId,
                'insuranceId': insuranceId,
                'name': planName
            };
            yield plan_model_1.default.create(plan);
        });
    }
    createProfile(socialName, name, sex, birthdate, phone, email) {
        return __awaiter(this, void 0, void 0, function* () {
            let newProfile = {
                'name': name,
                'socialName': socialName,
                'sex': sex,
                'birthdate': birthdate,
                'phone': phone,
                'email': email
            };
            return yield profile_model_1.default.create(newProfile);
        });
    }
    createUser(profileId, lastAccess, profiles, active, recoveryKey, lastRecovery, termApproved) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUser = {
                'profileId': profileId,
                'lastAccess': lastAccess,
                'profiles': profiles,
                'active': active,
                'recoveryKey': recoveryKey,
                'lastRecovery': lastRecovery,
                'termApproved': termApproved
            };
            return yield user_model_1.default.create(newUser);
        });
    }
    createUserInsurance(insuranceId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let userInsurance = {
                'insuranceId': insuranceId,
                'userId': userId,
            };
            yield userInsurance_model_1.default.create(userInsurance);
        });
    }
    createUserSite(userId, siteId, createdBy) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUserSite = {
                'userId': userId,
                'siteId': siteId,
                'createdBy': createdBy,
            };
            return yield userSite_model_1.default.create(newUserSite);
        });
    }
    ;
};
CreateService = __decorate([
    common_1.Injectable()
], CreateService);
exports.CreateService = CreateService;
