"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: () => __awaiter(this, void 0, void 0, function* () {
            const sequelize = new sequelize_typescript_1.Sequelize({
                database: 'doc-online',
                username: 'postgres',
                password: 'postgres',
                dialect: 'postgres',
                modelPaths: [__dirname + '/../models'],
                logging: true
            });
            yield sequelize.sync({ force: true });
            return sequelize;
        }),
    },
];
