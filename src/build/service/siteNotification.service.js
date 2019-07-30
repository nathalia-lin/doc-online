"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const site_model_1 = __importDefault(require("../models/site.model"));
const siteNotification_model_1 = __importDefault(require("../models/siteNotification.model"));
let SiteNotificationService = class SiteNotificationService {
    create(createSiteNotificationDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield siteNotification_model_1.default.create(createSiteNotificationDto);
        });
    }
    find(where) {
        return __awaiter(this, void 0, void 0, function* () {
            const siteNotifications = yield siteNotification_model_1.default.findAll({
                where: where, include: [site_model_1.default]
            });
            return siteNotifications;
        });
    }
    findOne(where) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof where === 'string') {
                where = { 'id': where };
            }
            const siteNotification = yield siteNotification_model_1.default.findOne({
                where: where, include: [site_model_1.default]
            });
            return siteNotification;
        });
    }
    updateOne(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield siteNotification_model_1.default.update(body, { where: { 'id': id } });
        });
    }
    deleteOne(siteNotificationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedSiteNotification = yield siteNotification_model_1.default.destroy({
                where: { 'id': siteNotificationId }
            });
            return yield deletedSiteNotification;
        });
    }
};
SiteNotificationService = __decorate([
    common_1.Injectable()
], SiteNotificationService);
exports.SiteNotificationService = SiteNotificationService;
