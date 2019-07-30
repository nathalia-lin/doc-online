import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { ExamModule } from "./exam.module";
import { UserProvider } from "../provider/user.provider";

@Module({
    imports: [DatabaseModule, ExamModule],
    controllers: [UserController],
    providers: [UserService, ...UserProvider],
    exports: [UserService]
})

export class UserModule { }
