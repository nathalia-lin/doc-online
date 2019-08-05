"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patient_model_1 = __importDefault(require("../models/patient.model"));
exports.PatientProvider = [
    {
        provide: 'PatientRepository',
        useValue: patient_model_1.default,
    },
];
