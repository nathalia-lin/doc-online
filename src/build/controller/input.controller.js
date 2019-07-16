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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const input_service_1 = require("src/service/input.service");
let InoutController = class InoutController {
    constructor(inputService) {
        this.inputService = inputService;
    }
    create(networkID, studyInstanceUID, studyDate, accessionNumber, admissionID, orderID, modality, studyStatus, reqProcID, reqProcDate, reqProcDescription, insuranceID, insuranceName, planID, planName, patientID, patientName, patientSocialName, patientBirthDate, patientSex, refPhysicianType, refPhysicianCRM, refPhysicianUF, refPhysicianName, protocolID, protocolPwd, reportextension, report, reportDate, readingPhysician, reqPhysicianName, reviewedBy) {
        return this.inputService.create(networkID, studyInstanceUID, studyDate, accessionNumber, admissionID, orderID, modality, studyStatus, insuranceID, insuranceName, planID, planName, patientID, patientName, patientSocialName, patientBirthDate, patientSex, refPhysicianType, refPhysicianCRM, refPhysicianUF, refPhysicianName, protocolID, protocolPwd, reportextension, report, reportDate, readingPhysician, reqPhysicianName, reviewedBy);
    }
    showAll() {
        return this.inputService.findAll();
    }
    showOne(inputId) {
        return this.inputService.findOne(inputId);
    }
    deleteOne(inputId) {
        return this.inputService.deleteOne(inputId);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('networkID')),
    __param(1, common_1.Body('studyInstanceUID')),
    __param(2, common_1.Body('studyDate')),
    __param(3, common_1.Body('accessionNumber')),
    __param(4, common_1.Body('admissionID')),
    __param(5, common_1.Body('orderID')),
    __param(6, common_1.Body('modality')),
    __param(7, common_1.Body('studyStatus')),
    __param(8, common_1.Body('reqProcID')),
    __param(9, common_1.Body('reqProcDate')),
    __param(10, common_1.Body('reqProcDescription')),
    __param(11, common_1.Body('insuranceID')),
    __param(12, common_1.Body('insuranceName')),
    __param(13, common_1.Body('planID')),
    __param(14, common_1.Body('planName')),
    __param(15, common_1.Body('patientID')),
    __param(16, common_1.Body('patientName')),
    __param(17, common_1.Body('patientSocialName')),
    __param(18, common_1.Body('patientBirthDate')),
    __param(19, common_1.Body('patientSex')),
    __param(20, common_1.Body('refPhysicianType')),
    __param(21, common_1.Body('refPhysicianCRM')),
    __param(22, common_1.Body('refPhysicianUF')),
    __param(23, common_1.Body('refPhysicianName')),
    __param(24, common_1.Body('protocolID')),
    __param(25, common_1.Body('protocolPwd')),
    __param(26, common_1.Body('reportextension')),
    __param(27, common_1.Body('report')),
    __param(28, common_1.Body('reportDate')),
    __param(29, common_1.Body('readingPhysician')),
    __param(30, common_1.Body('reqPhysicianName')),
    __param(31, common_1.Body('reviewedBy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Date, String, Number, Number, String, String, Number, Date, String, Number, Number, Number, String, Number, String, String, String, String, String, String, String, String, String, String, String, String, Date, String, String, String]),
    __metadata("design:returntype", void 0)
], InoutController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InoutController.prototype, "showAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InoutController.prototype, "showOne", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InoutController.prototype, "deleteOne", null);
InoutController = __decorate([
    common_1.Controller('input'),
    __metadata("design:paramtypes", [input_service_1.InputService])
], InoutController);
exports.InoutController = InoutController;
