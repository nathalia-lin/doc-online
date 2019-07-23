import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { UserInsuranceController } from "../controller/userInsurance.controller";
import { UserInsuranceService } from "../service/userInsurance.service";

@Module({
    imports: [DatabaseModule],
    controllers: [UserInsuranceController],
    providers: [UserInsuranceService],
    exports: [UserInsuranceService]
})

export class UserInsuranceModule { }
