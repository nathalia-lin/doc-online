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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = __importDefault(require("./user.model"));
let Login = class Login extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        type: sequelize_typescript_1.DataType.UUID
    }),
    __metadata("design:type", Number)
], Login.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.default),
    sequelize_typescript_1.Column({
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        type: sequelize_typescript_1.DataType.UUID
    }),
    __metadata("design:type", Number)
], Login.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.default),
    __metadata("design:type", user_model_1.default)
], Login.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(25)),
    __metadata("design:type", String)
], Login.prototype, "username", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(25)),
    __metadata("design:type", String)
], Login.prototype, "password", void 0);
Login = __decorate([
    sequelize_typescript_1.Table({ tableName: 'login' })
], Login);
exports.default = Login;
