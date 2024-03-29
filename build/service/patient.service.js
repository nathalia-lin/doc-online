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
const profile_model_1 = __importDefault(require("../models/profile.model"));
const exam_model_1 = __importDefault(require("../models/exam.model"));
let PatientService = class PatientService {
    constructor(patientRepository) {
        this.patientRepository = patientRepository;
    }
    create(createPatientDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.patientRepository.create(createPatientDto);
            ;
        });
    }
    find(where) {
        return __awaiter(this, void 0, void 0, function* () {
            const patients = yield this.patientRepository.findAll({
                where: where, include: [profile_model_1.default, exam_model_1.default]
            });
            return patients;
        });
    }
    findOne(where) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof where === 'string') {
                where = { 'id': where };
            }
            const patient = yield this.patientRepository.findOne({
                where: where, include: [profile_model_1.default, exam_model_1.default]
            });
            return patient;
        });
    }
    updateOne(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.patientRepository.update(body, { where: { 'id': id } });
        });
    }
    deleteOne(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedPatient = yield this.patientRepository.destroy({
                where: { 'id': patientId }
            });
            return yield deletedPatient;
        });
    }
};
PatientService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('PatientRepository')),
    __metadata("design:paramtypes", [Object])
], PatientService);
exports.PatientService = PatientService;
