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
    create(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.examService.create(req.token, body.networkID, body.studyInstanceUID, body.studyDate, body.accessionNumber, body.modality, body.studyStatus, body.reqProcDescription, body.insuranceID, body.insuranceName, body.planID, body.planName, body.patientID, body.patientName, body.patientSocialName, body.patientBirthDate, body.patientSex, body.patientPhone, body.patientEmail, body.patientPID, body.protocolID, body.protocolPwd, body.reqPhysicianType, body.reqPhysicianNum, body.reqPhysicianUF, body.reqPhysicianName, body.refPhysicianType, body.refPhysicianNum, body.refPhysicianUF, body.refPhysicianName);
            }
            catch (SequelizeDatabaseError) {
                throw new common_1.BadRequestException(SequelizeDatabaseError);
            }
        });
    }
    search(body, req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.examService.search(body, req.token);
            }
            catch (SequelizeDatabaseError) {
                throw new common_1.BadRequestException(SequelizeDatabaseError);
            }
        });
    }
    show() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.examService.find({});
        });
    }
    showOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.examService.findOne(id);
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.examService.updateOne(id, body);
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
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "create", null);
__decorate([
    common_1.Post('search'),
    __param(0, common_1.Body()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "search", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "show", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "showOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "update", null);
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
