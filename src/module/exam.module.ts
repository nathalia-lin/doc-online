import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { ExamController } from "../controller/exam.controller";
import { ExamService } from "../service/exam.service";
import { ExamProvider } from "../provider/exam.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [ExamController],
    providers: [ExamService, ...ExamProvider]
})

export class ExamModule { }
