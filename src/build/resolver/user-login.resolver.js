"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../service/user.service");
const common_1 = require("@nestjs/common");
const login_service_1 = require("src/service/login.service");
let UserLoginResolver = class UserLoginResolver {
    constructor(userService, loginService) {
        this.userService = userService;
        this.loginService = loginService;
    }
};
UserLoginResolver = __decorate([
    __param(1, common_1.Inject(common_1.forwardRef(() => login_service_1.LoginService))),
    __metadata("design:paramtypes", [user_service_1.UserService,
        login_service_1.LoginService])
], UserLoginResolver);
exports.UserLoginResolver = UserLoginResolver;