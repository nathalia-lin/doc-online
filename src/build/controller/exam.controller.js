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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const exam_service_1 = require("../service/exam.service");
let ExamController = class ExamController {
    constructor(examService) {
        this.examService = examService;
    }
    create(networkID, studyInstanceUID, studyDate, accessionNumber, modality, studyStatus, reqProcDescription, insuranceID, insuranceName, planID, planName, patientID, patientName, patientSocialName, patientBirthDate, patientSex, refPhysicianType, refPhysicianCRM, refPhysicianUF, refPhysicianName, protocolID, protocolPwd, readingPhysician, reqPhysicianName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.examService.create(networkID, studyInstanceUID, studyDate, accessionNumber, modality, studyStatus, reqProcDescription, insuranceID, insuranceName, planID, planName, patientID, patientName, patientSocialName, patientBirthDate, patientSex, refPhysicianType, refPhysicianCRM, refPhysicianUF, refPhysicianName, protocolID, protocolPwd, readingPhysician, reqPhysicianName);
        });
    }
    search() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    show(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.examService.find(where);
        });
    }
    deleteOne(examId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.examService.deleteOne(examId);
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('networkID')),
    __param(1, common_1.Body('studyInstanceUID')),
    __param(2, common_1.Body('studyDate')),
    __param(3, common_1.Body('accessionNumber')),
    __param(4, common_1.Body('modality')),
    __param(5, common_1.Body('studyStatus')),
    __param(6, common_1.Body('reqProcDescription')),
    __param(7, common_1.Body('insuranceID')),
    __param(8, common_1.Body('insuranceName')),
    __param(9, common_1.Body('planID')),
    __param(10, common_1.Body('planName')),
    __param(11, common_1.Body('patientID')),
    __param(12, common_1.Body('patientName')),
    __param(13, common_1.Body('patientSocialName')),
    __param(14, common_1.Body('patientBirthDate')),
    __param(15, common_1.Body('patientSex')),
    __param(16, common_1.Body('refPhysicianType')),
    __param(17, common_1.Body('refPhysicianCRM (depreciado) | refPhysicianNum')),
    __param(18, common_1.Body('refPhysicianUF')),
    __param(19, common_1.Body('refPhysicianName')),
    __param(20, common_1.Body('protocolID')),
    __param(21, common_1.Body('protocolPwd')),
    __param(22, common_1.Body('readingPhysician')),
    __param(23, common_1.Body('reqPhysicianName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Date, String, String, String, String, Number, String, Number, String, Number, String, String, Date, String, String, String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "create", null);
__decorate([
    common_1.Post('search'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "search", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "show", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "deleteOne", null);
ExamController = __decorate([
    common_1.Controller('exam'),
    __metadata("design:paramtypes", [exam_service_1.ExamService])
], ExamController);
exports.ExamController = ExamController;
