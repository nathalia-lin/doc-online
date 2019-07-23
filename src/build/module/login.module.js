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
const login_controller_1 = require("../controller/login.controller");
const login_service_1 = require("../service/login.service");
const auth_middleware_1 = require("../middleware/auth.middleware");
let LoginModule = class LoginModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .exclude({ path: '/login', method: common_1.RequestMethod.ALL })
            .forRoutes({ path: '/*/*', method: common_1.RequestMethod.GET });
    }
};
LoginModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [login_controller_1.LoginController],
        providers: [login_service_1.LoginService],
        exports: [login_service_1.LoginService]
    })
], LoginModule);
exports.LoginModule = LoginModule;
