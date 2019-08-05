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
const patient_model_1 = __importDefault(require("./patient.model"));
const doctor_model_1 = __importDefault(require("./doctor.model"));
let Profile = class Profile extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        type: sequelize_typescript_1.DataType.UUID
    }),
    __metadata("design:type", Number)
], Profile.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(30)),
    __metadata("design:type", String)
], Profile.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], Profile.prototype, "socialName", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(1)),
    __metadata("design:type", String)
], Profile.prototype, "sex", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(20)),
    __metadata("design:type", String)
], Profile.prototype, "birthdate", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(12)),
    __metadata("design:type", String)
], Profile.prototype, "phone", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(50)),
    __metadata("design:type", String)
], Profile.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => user_model_1.default),
    __metadata("design:type", user_model_1.default)
], Profile.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => patient_model_1.default),
    __metadata("design:type", patient_model_1.default)
], Profile.prototype, "patient", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => doctor_model_1.default),
    __metadata("design:type", doctor_model_1.default)
], Profile.prototype, "doctor", void 0);
Profile = __decorate([
    sequelize_typescript_1.Table({ tableName: 'profile' })
], Profile);
exports.default = Profile;
