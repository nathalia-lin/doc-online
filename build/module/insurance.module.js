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
const insurance_controller_1 = require("../controller/insurance.controller");
const insurance_service_1 = require("../service/insurance.service");
const insurance_provider_1 = require("../provider/insurance.provider");
let InsuranceModule = class InsuranceModule {
};
InsuranceModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [insurance_controller_1.InsuranceController],
        providers: [insurance_service_1.InsuranceService, ...insurance_provider_1.InsuranceProvider],
        exports: [insurance_service_1.InsuranceService]
    })
], InsuranceModule);
exports.InsuranceModule = InsuranceModule;
