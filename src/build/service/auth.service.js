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
const login_service_1 = require("./login.service");
let AuthService = class AuthService {
    authenticate(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            const login = yield this.loginService.find({
                'username': credentials.username,
                'password': crypto_1.default.createHmac('sha256', credentials.password).digest('hex')
            });
            if (!login) {
                throw new Error('Login not Found');
            }
            console.log(this.getToken(login[0]));
            return this.getToken(login[0]);
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
};
__decorate([
    common_1.Inject('LoginService'),
    __metadata("design:type", login_service_1.LoginService)
], AuthService.prototype, "loginService", void 0);
AuthService = __decorate([
    common_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
