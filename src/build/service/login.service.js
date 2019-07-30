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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt = __importStar(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const login_model_1 = __importDefault(require("../models/login.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const profile_model_1 = __importDefault(require("../models/profile.model"));
let LoginService = class LoginService {
    create(createLoginDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield login_model_1.default.create(createLoginDto);
            ;
        });
    }
    authenticate(login) {
        return __awaiter(this, void 0, void 0, function* () {
            const authLogin = yield login_model_1.default.findOne({
                where: {
                    'username': login.username,
                    'password': crypto_1.default.createHmac('sha256', login.password).digest('hex')
                }
            });
            if (!authLogin) {
                throw new common_1.UnauthorizedException('Login not Found');
            }
            return this.sendToken(authLogin);
        });
    }
    sendToken(login) {
        return __awaiter(this, void 0, void 0, function* () {
            login = yield this.findOne(login.id);
            const user = yield user_model_1.default.findByPk(login.userId);
            const profile = yield profile_model_1.default.findByPk(user.profileId);
            const token = yield this.createToken(login);
            const obj = {
                "username": login.username,
                "name": profile.name,
                "profile": user.profiles,
                "token": token
            };
            return obj;
        });
    }
    createToken(login) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                algorithm: 'HS256',
                expiresIn: '30 days',
                jwtid: ''
            };
            const payload = {
                'id': login.id,
                'username': login.username
            };
            return yield jwt.sign(payload, 'secret', options);
        });
    }
    find(where) {
        return __awaiter(this, void 0, void 0, function* () {
            const logins = yield login_model_1.default.findAll({
                where: where, include: [user_model_1.default]
            });
            return logins;
        });
    }
    findOne(where) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof where === 'string') {
                where = { 'id': where };
            }
            const login = yield login_model_1.default.findOne({
                where: where, include: [user_model_1.default]
            });
            return login;
        });
    }
    updateOne(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield login_model_1.default.update(body, { where: { 'id': id } });
        });
    }
    deleteOne(loginId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedLogin = yield login_model_1.default.destroy({
                where: { 'id': loginId }
            });
            return yield deletedLogin;
        });
    }
};
LoginService = __decorate([
    common_1.Injectable()
], LoginService);
exports.LoginService = LoginService;
