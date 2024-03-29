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
const core_1 = require("@nestjs/core");
const app_module_1 = require("./module/app.module");
const common_1 = require("@nestjs/common");
const main = new class Main {
    constructor() {
        this.port = 3000;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.server();
        });
    }
    server() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = yield core_1.NestFactory.create(app_module_1.AppModule);
            yield app.listen(this.port);
            common_1.Logger.log(`Server running on http://localhost:${this.port}`, 'Server');
        });
    }
};
main.run();
