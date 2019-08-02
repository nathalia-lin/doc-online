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
const user_model_1 = __importDefault(require("./user.model"));
const userInsurance_model_1 = __importDefault(require("./userInsurance.model"));
const exam_model_1 = __importDefault(require("./exam.model"));
const plan_model_1 = __importDefault(require("./plan.model"));
let Insurance = class Insurance extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        type: sequelize_typescript_1.DataType.UUID
    }),
    __metadata("design:type", Number)
], Insurance.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => site_model_1.default),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", Number)
], Insurance.prototype, "siteId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => site_model_1.default),
    __metadata("design:type", site_model_1.default)
], Insurance.prototype, "site", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(100)),
    __metadata("design:type", String)
], Insurance.prototype, "insuranceId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(200)),
    __metadata("design:type", String)
], Insurance.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => user_model_1.default, () => userInsurance_model_1.default),
    __metadata("design:type", Array)
], Insurance.prototype, "users", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => exam_model_1.default),
    __metadata("design:type", Array)
], Insurance.prototype, "exams", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => plan_model_1.default),
    __metadata("design:type", Array)
], Insurance.prototype, "plans", void 0);
Insurance = __decorate([
    sequelize_typescript_1.Table({ tableName: 'insurance' })
], Insurance);
exports.default = Insurance;
