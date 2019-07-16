"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exam_model_1 = __importDefault(require("../models/exam.model"));
exports.ExamProvider = [
    {
        provide: 'ExamRepository',
        useValue: exam_model_1.default,
    },
];
