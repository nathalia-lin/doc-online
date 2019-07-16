"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSite_model_1 = __importDefault(require("../models/userSite.model"));
exports.UserSiteProvider = [
    {
        provide: 'UserSiteRepository',
        useValue: userSite_model_1.default,
    },
];
