"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logExam_model_1 = __importDefault(require("../models/logExam.model"));
exports.LogExamProvider = [
    {
        provide: 'LogExamRepository',
        useValue: logExam_model_1.default,
    },
];
