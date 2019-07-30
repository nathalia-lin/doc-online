import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { CreateService } from "../service/create.service";
import { ExamService } from "../service/exam.service";

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserService, CreateService, ExamService],
    exports: [UserService]
})

export class UserModule { }
