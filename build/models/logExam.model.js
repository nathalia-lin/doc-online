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
const exam_model_1 = __importDefault(require("./exam.model"));
let LogExam = class LogExam extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        type: sequelize_typescript_1.DataType.UUID
    }),
    __metadata("design:type", Number)
], LogExam.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => exam_model_1.default),
    __metadata("design:type", Number)
], LogExam.prototype, "examId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => exam_model_1.default),
    __metadata("design:type", exam_model_1.default)
], LogExam.prototype, "exam", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], LogExam.prototype, "postedData", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], LogExam.prototype, "createdAt", void 0);
LogExam = __decorate([
    sequelize_typescript_1.Table({ tableName: 'logExam' })
], LogExam);
exports.default = LogExam;
