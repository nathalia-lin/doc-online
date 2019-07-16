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
const site_model_1 = __importDefault(require("../models/site.model"));
const patient_model_1 = __importDefault(require("../models/patient.model"));
const doctor_model_1 = __importDefault(require("../models/doctor.model"));
const insurance_model_1 = __importDefault(require("../models/insurance.model"));
const views_model_1 = __importDefault(require("../models/views.model"));
let ExamService = class ExamService {
    constructor(examRepository) {
        this.examRepository = examRepository;
    }
    create(createExamDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.examRepository.create(createExamDto);
            }
            catch (err) {
                console.log(err);
            }
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
ExamService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('ExamRepository')),
    __metadata("design:paramtypes", [Object])
], ExamService);
exports.ExamService = ExamService;
