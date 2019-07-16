import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { UserInsuranceController } from "../controller/userInsurance.controller";
import { UserInsuranceService } from "../service/userInsurance.service";
import { UserInsuranceProvider } from "../provider/userInsurance.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [UserInsuranceController],
    providers: [UserInsuranceService, ...UserInsuranceProvider]
})

export class UserInsuranceModule { }
