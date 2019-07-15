import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { ExamController } from "src/controller/exam.controller";
import { ExamService } from "src/service/exam.service";
import { ExamProvider } from "../provider/exam.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [ExamController],
    providers: [ExamService, ...ExamProvider]

})

export class ExamModule { }
