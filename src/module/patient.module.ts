import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { PatientService } from "src/service/patient.service";
import { PatientController } from "src/controller/patient.controller";
import { PatientProvider } from "../provider/patient.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [PatientController],
    providers: [PatientService, ...PatientProvider]
})

export class PatientModule { }

