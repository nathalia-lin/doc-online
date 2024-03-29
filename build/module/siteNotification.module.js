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
const siteNotification_service_1 = require("../service/siteNotification.service");
const siteNotification_controller_1 = require("../controller/siteNotification.controller");
const siteNotification_provider_1 = require("../provider/siteNotification.provider");
let SiteNotificationModule = class SiteNotificationModule {
};
SiteNotificationModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [siteNotification_controller_1.SiteNotificationController],
        providers: [siteNotification_service_1.SiteNotificationService, ...siteNotification_provider_1.SiteNotificationProvider],
        exports: [siteNotification_service_1.SiteNotificationService]
    })
], SiteNotificationModule);
exports.SiteNotificationModule = SiteNotificationModule;
