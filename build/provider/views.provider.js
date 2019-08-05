"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const views_model_1 = __importDefault(require("../models/views.model"));
exports.ViewsProvider = [
    {
        provide: 'ViewsRepository',
        useValue: views_model_1.default,
    },
];
