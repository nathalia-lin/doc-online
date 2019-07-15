import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { LogExamController } from "src/controller/logExam.controller";
import { LogExamService } from "src/service/logExam.service";
import { LogExamProvider } from "../provider/logExam.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [LogExamController],
    providers: [LogExamService, ...LogExamProvider]
})

export class LogExamModule { }
