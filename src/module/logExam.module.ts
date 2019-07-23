import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { LogExamController } from "../controller/logExam.controller";
import { LogExamService } from "../service/logExam.service";

@Module({
    imports: [DatabaseModule],
    controllers: [LogExamController],
    providers: [LogExamService],
    exports: [LogExamService]
})

export class LogExamModule { }
