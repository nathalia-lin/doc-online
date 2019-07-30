import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { PatientService } from "../service/patient.service";
import { PatientController } from "../controller/patient.controller";
import { PatientProvider } from "../provider/patient.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [PatientController],
    providers: [PatientService, ...PatientProvider],
    exports: [PatientService]
})

export class PatientModule { }

