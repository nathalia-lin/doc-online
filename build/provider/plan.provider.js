"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plan_model_1 = __importDefault(require("../models/plan.model"));
exports.PlanProvider = [
    {
        provide: 'PlanRepository',
        useValue: plan_model_1.default,
    },
];
