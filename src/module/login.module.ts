import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { LoginController } from "../controller/login.controller";
import { LoginService } from "../service/login.service";
import { LoginProvider } from "../provider/login.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [LoginController],
    providers: [LoginService, ...LoginProvider]
})

export class LoginModule { }
