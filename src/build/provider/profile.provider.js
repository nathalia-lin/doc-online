"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const profile_model_1 = __importDefault(require("../models/profile.model"));
exports.ProfileProvider = [
    {
        provide: 'ProfileRepository',
        useValue: profile_model_1.default,
    },
];
