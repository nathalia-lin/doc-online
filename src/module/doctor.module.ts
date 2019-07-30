import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { DoctorController } from "../controller/doctor.controller";
import { DoctorService } from "../service/doctor.service";

@Module({
    imports: [DatabaseModule],
    controllers: [DoctorController],
    providers: [DoctorService],
    exports: [DoctorService]
})

export class DoctorModule { }
