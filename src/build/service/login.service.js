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
const user_model_1 = __importDefault(require("../models/user.model"));
let LoginService = class LoginService {
    constructor(loginRepository) {
        this.loginRepository = loginRepository;
    }
    create(createLoginDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.loginRepository.create(createLoginDto);
            ;
        });
    }
    authenticate(login) {
        return __awaiter(this, void 0, void 0, function* () {
            const authLogin = yield this.loginRepository.findOne({
                where: {
                    'username': login.username,
                    'password': crypto_1.default.createHmac('sha256', login.password).digest('hex')
                }
            });
            if (!login) {
                throw new Error('Login not Found');
            }
            return this.getToken(authLogin);
        });
    }
    getToken(login) {
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
            const logins = yield this.loginRepository.findAll({
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
            const login = yield this.loginRepository.findOne({
                where: where, include: [user_model_1.default]
            });
            return login;
        });
    }
};
LoginService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('LoginRepository')),
    __metadata("design:paramtypes", [Object])
], LoginService);
exports.LoginService = LoginService;
