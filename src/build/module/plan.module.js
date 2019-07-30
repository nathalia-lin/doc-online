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
const plan_controller_1 = require("../controller/plan.controller");
const plan_service_1 = require("../service/plan.service");
const plan_provider_1 = require("../provider/plan.provider");
let PlanModule = class PlanModule {
};
PlanModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [plan_controller_1.PlanController],
        providers: [plan_service_1.PlanService, ...plan_provider_1.PlanProvider],
        exports: [plan_service_1.PlanService]
    })
], PlanModule);
exports.PlanModule = PlanModule;
