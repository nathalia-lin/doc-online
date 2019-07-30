import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { InsuranceController } from "../controller/insurance.controller";
import { InsuranceService } from "../service/insurance.service";

@Module({
    imports: [DatabaseModule],
    controllers: [InsuranceController],
    providers: [InsuranceService],
    exports: [InsuranceService]
})

export class InsuranceModule { }
