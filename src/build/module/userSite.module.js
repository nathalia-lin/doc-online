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
const userSite_controller_1 = require("../controller/userSite.controller");
const userSite_service_1 = require("../service/userSite.service");
let UserSiteModule = class UserSiteModule {
};
UserSiteModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [userSite_controller_1.UserSiteController],
        providers: [userSite_service_1.UserSiteService],
        exports: [userSite_service_1.UserSiteService]
    })
], UserSiteModule);
exports.UserSiteModule = UserSiteModule;
