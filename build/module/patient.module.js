"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const patient_service_1 = require("../service/patient.service");
const patient_controller_1 = require("../controller/patient.controller");
const patient_provider_1 = require("../provider/patient.provider");
let PatientModule = class PatientModule {
};
PatientModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [patient_controller_1.PatientController],
        providers: [patient_service_1.PatientService, ...patient_provider_1.PatientProvider],
        exports: [patient_service_1.PatientService]
    })
], PatientModule);
exports.PatientModule = PatientModule;
