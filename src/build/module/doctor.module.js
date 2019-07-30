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
const doctor_controller_1 = require("../controller/doctor.controller");
const doctor_service_1 = require("../service/doctor.service");
let DoctorModule = class DoctorModule {
};
DoctorModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [doctor_controller_1.DoctorController],
        providers: [doctor_service_1.DoctorService],
        exports: [doctor_service_1.DoctorService]
    })
], DoctorModule);
exports.DoctorModule = DoctorModule;
