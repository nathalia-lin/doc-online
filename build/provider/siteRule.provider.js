"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const siteRule_model_1 = __importDefault(require("../models/siteRule.model"));
exports.SiteRuleProvider = [
    {
        provide: 'SiteRuleRepository',
        useValue: siteRule_model_1.default,
    },
];
