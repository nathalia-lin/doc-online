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
const site_model_1 = __importDefault(require("./site.model"));
const patient_model_1 = __importDefault(require("./patient.model"));
const doctor_model_1 = __importDefault(require("./doctor.model"));
const insurance_model_1 = __importDefault(require("./insurance.model"));
const logExam_model_1 = __importDefault(require("./logExam.model"));
const views_model_1 = __importDefault(require("./views.model"));
let Exam = class Exam extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        type: sequelize_typescript_1.DataType.UUID
    }),
    __metadata("design:type", Number)
], Exam.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(15)),
    __metadata("design:type", String)
], Exam.prototype, "pid", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(50)),
    __metadata("design:type", String)
], Exam.prototype, "accessionNum", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], Exam.prototype, "studyInstanceUID", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(25)),
    __metadata("design:type", String)
], Exam.prototype, "networkId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => site_model_1.default),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", Number)
], Exam.prototype, "siteId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => site_model_1.default),
    __metadata("design:type", site_model_1.default)
], Exam.prototype, "site", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(5)),
    __metadata("design:type", String)
], Exam.prototype, "modality", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], Exam.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Exam.prototype, "examDate", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(25)),
    __metadata("design:type", String)
], Exam.prototype, "statusType", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => patient_model_1.default),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", Number)
], Exam.prototype, "patientId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => patient_model_1.default),
    __metadata("design:type", patient_model_1.default)
], Exam.prototype, "patient", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => doctor_model_1.default),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", Number)
], Exam.prototype, "requestingId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => doctor_model_1.default),
    __metadata("design:type", doctor_model_1.default)
], Exam.prototype, "requestingDoctor", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => doctor_model_1.default),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", Number)
], Exam.prototype, "consultingId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => doctor_model_1.default),
    __metadata("design:type", doctor_model_1.default)
], Exam.prototype, "consultingDoctor", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => insurance_model_1.default),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", Number)
], Exam.prototype, "insuranceId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => insurance_model_1.default),
    __metadata("design:type", insurance_model_1.default)
], Exam.prototype, "insurance", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Exam.prototype, "lastReportView", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", Number)
], Exam.prototype, "lastImageView", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Exam.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Exam.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => logExam_model_1.default),
    __metadata("design:type", logExam_model_1.default)
], Exam.prototype, "logExam", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => views_model_1.default),
    __metadata("design:type", Array)
], Exam.prototype, "views", void 0);
Exam = __decorate([
    sequelize_typescript_1.Table({ tableName: 'exam' })
], Exam);
exports.default = Exam;
