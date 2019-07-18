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
const common_1 = require("@nestjs/common");
const userSite_dto_1 = require("../dto/userSite.dto");
const userSite_service_1 = require("../service/userSite.service");
let UserSiteController = class UserSiteController {
    constructor(userSiteService) {
        this.userSiteService = userSiteService;
    }
    create(createUserSiteDto) {
        return this.userSiteService.create(createUserSiteDto);
    }
    showOne(where) {
        return this.userSiteService.find(where);
    }
    deleteOne(userSiteId) {
        return this.userSiteService.deleteOne(userSiteId);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userSite_dto_1.CreateUserSiteDto]),
    __metadata("design:returntype", void 0)
], UserSiteController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserSiteController.prototype, "showOne", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserSiteController.prototype, "deleteOne", null);
UserSiteController = __decorate([
    common_1.Controller('usersite'),
    __metadata("design:paramtypes", [userSite_service_1.UserSiteService])
], UserSiteController);
exports.UserSiteController = UserSiteController;
