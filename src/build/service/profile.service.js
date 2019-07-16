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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_model_1 = __importDefault(require("../models/user.model"));
const patient_model_1 = __importDefault(require("../models/patient.model"));
const doctor_model_1 = __importDefault(require("../models/doctor.model"));
let ProfileService = class ProfileService {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    create(createProfileDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.profileRepository.create(createProfileDto);
            ;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.profileRepository.findAll();
        });
    }
    findOne(profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.profileRepository.findOne({
                where: { 'id': profileId }, include: [user_model_1.default, patient_model_1.default, doctor_model_1.default]
            });
            return profile;
        });
    }
    deleteOne(profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedProfile = yield this.profileRepository.destroy({
                where: { 'id': profileId }
            });
            return yield deletedProfile;
        });
    }
};
ProfileService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('ProfileRepository')),
    __metadata("design:paramtypes", [Object])
], ProfileService);
exports.ProfileService = ProfileService;
