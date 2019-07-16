"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const siteNotification_model_1 = __importDefault(require("../models/siteNotification.model"));
exports.SiteNotificationProvider = [
    {
        provide: 'SiteNotificationRepository',
        useValue: siteNotification_model_1.default,
    },
];
