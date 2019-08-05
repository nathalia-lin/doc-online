"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const site_model_1 = __importDefault(require("../models/site.model"));
exports.SiteProvider = [
    {
        provide: 'SiteRepository',
        useValue: site_model_1.default,
    },
];
