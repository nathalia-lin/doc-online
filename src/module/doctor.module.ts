import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { DoctorController } from "src/controller/doctor.controller";
import { DoctorService } from "src/service/doctor.service";
import { DoctorProvider } from "../provider/doctor.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [DoctorController],
    providers: [DoctorService, ...DoctorProvider]
})

export class DoctorModule { }
