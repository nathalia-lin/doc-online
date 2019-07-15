import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { InsuranceController } from "src/controller/insurance.controller";
import { InsuranceService } from "src/service/insurance.service";
import { InsuranceProvider } from "../provider/insurance.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [InsuranceController],
    providers: [InsuranceService, ...InsuranceProvider]
})

export class InsuranceModule { }
