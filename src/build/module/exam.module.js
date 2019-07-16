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
let ExamModule = class ExamModule {
};
ExamModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [exam_controller_1.ExamController],
        providers: [exam_service_1.ExamService, ...exam_provider_1.ExamProvider]
    })
], ExamModule);
exports.ExamModule = ExamModule;
