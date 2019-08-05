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
const login_model_1 = __importDefault(require("./login.model"));
const site_model_1 = __importDefault(require("./site.model"));
const userSite_model_1 = __importDefault(require("./userSite.model"));
const views_model_1 = __importDefault(require("./views.model"));
const insurance_model_1 = __importDefault(require("./insurance.model"));
const userInsurance_model_1 = __importDefault(require("./userInsurance.model"));
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        type: sequelize_typescript_1.DataType.UUID
    }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => profile_model_1.default),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", Number)
], User.prototype, "profileId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => profile_model_1.default),
    __metadata("design:type", profile_model_1.default)
], User.prototype, "profile", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], User.prototype, "lastAccess", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(100)),
    __metadata("design:type", String)
], User.prototype, "profiles", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.BOOLEAN),
    __metadata("design:type", Boolean)
], User.prototype, "active", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(120)),
    __metadata("design:type", String)
], User.prototype, "recoveryKey", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], User.prototype, "lastRecovery", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], User.prototype, "termApproved", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => login_model_1.default),
    __metadata("design:type", Array)
], User.prototype, "login", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => views_model_1.default),
    __metadata("design:type", Array)
], User.prototype, "views", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => site_model_1.default, () => userSite_model_1.default),
    __metadata("design:type", Array)
], User.prototype, "sites", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => insurance_model_1.default, () => userInsurance_model_1.default),
    __metadata("design:type", Array)
], User.prototype, "insurances", void 0);
User = __decorate([
    sequelize_typescript_1.Table({ tableName: 'user' })
], User);
exports.default = User;
