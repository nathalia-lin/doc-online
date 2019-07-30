import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { PatientService } from "../service/patient.service";
import { PatientController } from "../controller/patient.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [PatientController],
    providers: [PatientService],
    exports: [PatientService]
})

export class PatientModule { }

