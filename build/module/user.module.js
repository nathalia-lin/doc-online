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
const user_controller_1 = require("../controller/user.controller");
const user_service_1 = require("../service/user.service");
const exam_module_1 = require("./exam.module");
const user_provider_1 = require("../provider/user.provider");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, exam_module_1.ExamModule],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, ...user_provider_1.UserProvider],
        exports: [user_service_1.UserService]
    })
], UserModule);
exports.UserModule = UserModule;
