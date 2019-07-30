import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { ExamController } from "../controller/exam.controller";
import { ExamService } from "../service/exam.service";
import { CreateService } from "../service/create.service";

@Module({
    imports: [DatabaseModule],
    controllers: [ExamController],
    providers: [ExamService, CreateService]
})

export class ExamModule { }
