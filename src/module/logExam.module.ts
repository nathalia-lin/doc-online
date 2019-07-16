import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { LogExamController } from "../controller/logExam.controller";
import { LogExamService } from "../service/logExam.service";
import { LogExamProvider } from "../provider/logExam.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [LogExamController],
    providers: [LogExamService, ...LogExamProvider]
})

export class LogExamModule { }
