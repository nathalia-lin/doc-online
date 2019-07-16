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
const profile_controllers_1 = require("../controller/profile.controllers");
const profile_service_1 = require("../service/profile.service");
const profile_provider_1 = require("../provider/profile.provider");
let ProfileModule = class ProfileModule {
};
ProfileModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [profile_controllers_1.ProfileController],
        providers: [profile_service_1.ProfileService, ...profile_provider_1.ProfileProvider]
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;
