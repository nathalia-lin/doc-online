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
const userInsurance_model_1 = __importDefault(require("../models/userInsurance.model"));
let UserInsuranceService = class UserInsuranceService {
    create(createUserInsuranceDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userInsurance_model_1.default.create(createUserInsuranceDto);
            ;
        });
    }
    find(where) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof where === 'string') {
                where = { 'id': where };
            }
            const userInsurance = yield userInsurance_model_1.default.findAll({
                where: where
            });
            return userInsurance;
        });
    }
    deleteOne(userInsuranceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedUserInsurance = yield userInsurance_model_1.default.destroy({
                where: { 'id': userInsuranceId }
            });
            return yield deletedUserInsurance;
        });
    }
};
UserInsuranceService = __decorate([
    common_1.Injectable()
], UserInsuranceService);
exports.UserInsuranceService = UserInsuranceService;
