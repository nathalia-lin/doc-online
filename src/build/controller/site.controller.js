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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const site_dto_1 = require("../dto/site.dto");
const site_service_1 = require("../service/site.service");
let SiteController = class SiteController {
    constructor(siteService) {
        this.siteService = siteService;
    }
    create(createSiteDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.siteService.create(createSiteDto);
        });
    }
    showOne(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.siteService.find(where);
        });
    }
    deleteOne(siteId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.siteService.deleteOne(siteId);
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [site_dto_1.CreateSiteDto]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "showOne", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "deleteOne", null);
SiteController = __decorate([
    common_1.Controller('site'),
    __metadata("design:paramtypes", [site_service_1.SiteService])
], SiteController);
exports.SiteController = SiteController;
