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
const exam_controller_1 = require("../controller/exam.controller");
const exam_service_1 = require("../service/exam.service");
const exam_provider_1 = require("../provider/exam.provider");
const site_module_1 = require("./site.module");
const siteRule_module_1 = require("./siteRule.module");
const siteNotification_module_1 = require("./siteNotification.module");
const profile_module_1 = require("./profile.module");
const user_module_1 = require("./user.module");
const login_module_1 = require("./login.module");
const patient_module_1 = require("./patient.module");
const doctor_module_1 = require("./doctor.module");
const userSite_module_1 = require("./userSite.module");
const views_module_1 = require("./views.module");
const logExam_module_1 = require("./logExam.module");
const insurance_module_1 = require("./insurance.module");
const userInsurance_module_1 = require("./userInsurance.module");
const plan_module_1 = require("./plan.module");
let ExamModule = class ExamModule {
};
ExamModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.DatabaseModule,
            site_module_1.SiteModule,
            siteRule_module_1.SiteRuleModule,
            siteNotification_module_1.SiteNotificationModule,
            profile_module_1.ProfileModule,
            user_module_1.UserModule,
            login_module_1.LoginModule,
            patient_module_1.PatientModule,
            doctor_module_1.DoctorModule,
            userSite_module_1.UserSiteModule,
            views_module_1.ViewsModule,
            logExam_module_1.LogExamModule,
            insurance_module_1.InsuranceModule,
            userInsurance_module_1.UserInsuranceModule,
            plan_module_1.PlanModule
        ],
        controllers: [exam_controller_1.ExamController],
        providers: [exam_service_1.ExamService, ...exam_provider_1.ExamProvider]
    })
], ExamModule);
exports.ExamModule = ExamModule;
