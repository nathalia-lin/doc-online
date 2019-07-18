import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { InsuranceController } from "../controller/insurance.controller";
import { InsuranceService } from "../service/insurance.service";
import { InsuranceProvider } from "../provider/insurance.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [InsuranceController],
    providers: [InsuranceService, ...InsuranceProvider],
    exports: [InsuranceService]
})

export class InsuranceModule { }
