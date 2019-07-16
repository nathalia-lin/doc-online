"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_model_1 = __importDefault(require("../models/login.model"));
exports.LoginProvider = [
    {
        provide: 'LoginRepository',
        useValue: login_model_1.default,
    },
];
