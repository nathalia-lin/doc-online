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
const profile_model_1 = __importDefault(require("./profile.model"));
const exam_model_1 = __importDefault(require("./exam.model"));
let Doctor = class Doctor extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        type: sequelize_typescript_1.DataType.UUID
    }),
    __metadata("design:type", Number)
], Doctor.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => profile_model_1.default),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", Number)
], Doctor.prototype, "profileId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => profile_model_1.default),
    __metadata("design:type", profile_model_1.default)
], Doctor.prototype, "profile", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(10)),
    __metadata("design:type", String)
], Doctor.prototype, "docType", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(5)),
    __metadata("design:type", String)
], Doctor.prototype, "docIssuer", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(15)),
    __metadata("design:type", String)
], Doctor.prototype, "docNum", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => exam_model_1.default),
    __metadata("design:type", Array)
], Doctor.prototype, "exams", void 0);
Doctor = __decorate([
    sequelize_typescript_1.Table({ tableName: 'doctor' })
], Doctor);
exports.default = Doctor;
