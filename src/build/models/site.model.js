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
const siteRule_model_1 = __importDefault(require("./siteRule.model"));
const siteNotification_model_1 = __importDefault(require("./siteNotification.model"));
const user_model_1 = __importDefault(require("./user.model"));
const userSite_model_1 = __importDefault(require("./userSite.model"));
const insurance_model_1 = __importDefault(require("./insurance.model"));
const exam_model_1 = __importDefault(require("./exam.model"));
let Site = class Site extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        type: sequelize_typescript_1.DataType.UUID
    }),
    __metadata("design:type", Number)
], Site.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", Number)
], Site.prototype, "parentId", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Site.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Site.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(100)),
    __metadata("design:type", String)
], Site.prototype, "logo", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(20)),
    __metadata("design:type", String)
], Site.prototype, "networkId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(14)),
    __metadata("design:type", String)
], Site.prototype, "cnpj", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(40)),
    __metadata("design:type", String)
], Site.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", String)
], Site.prototype, "addressId", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => siteRule_model_1.default),
    __metadata("design:type", siteRule_model_1.default)
], Site.prototype, "siteRule", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => siteNotification_model_1.default),
    __metadata("design:type", siteNotification_model_1.default)
], Site.prototype, "siteNotification", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => user_model_1.default, () => userSite_model_1.default),
    __metadata("design:type", Array)
], Site.prototype, "users", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => insurance_model_1.default),
    __metadata("design:type", Array)
], Site.prototype, "insurances", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => exam_model_1.default),
    __metadata("design:type", Array)
], Site.prototype, "exams", void 0);
Site = __decorate([
    sequelize_typescript_1.Table({ tableName: 'site' })
], Site);
exports.default = Site;
