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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt = __importStar(require("jsonwebtoken"));
const login_service_1 = require("../service/login.service");
let AuthMiddleware = class AuthMiddleware {
    constructor(loginService) {
        this.loginService = loginService;
    }
    use(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('IN MIDDLEWARE');
            const authHeaders = req.headers.authorization;
            if (authHeaders && authHeaders.split(' ')[0] === 'Bearer') {
                const token = authHeaders.split(' ')[1];
                const decoded = jwt.verify(token, 'secret');
                const user = yield this.loginService.find({
                    'id': decoded.id,
                    'username': decoded.username,
                });
                req.userId = decoded.id;
                if (!user)
                    throw new Error('User not found');
                next();
            }
            else {
                throw new Error('Unauthorized user');
            }
        });
    }
};
AuthMiddleware = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
