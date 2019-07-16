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
const userInsurance_controller_1 = require("../controller/userInsurance.controller");
const userInsurance_service_1 = require("../service/userInsurance.service");
const userInsurance_provider_1 = require("../provider/userInsurance.provider");
let UserInsuranceModule = class UserInsuranceModule {
};
UserInsuranceModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [userInsurance_controller_1.UserInsuranceController],
        providers: [userInsurance_service_1.UserInsuranceService, ...userInsurance_provider_1.UserInsuranceProvider]
    })
], UserInsuranceModule);
exports.UserInsuranceModule = UserInsuranceModule;
