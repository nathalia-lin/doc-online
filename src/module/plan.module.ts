import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { PlanController } from "../controller/plan.controller";
import { PlanService } from "../service/plan.service";

@Module({
    imports: [DatabaseModule],
    controllers: [PlanController],
    providers: [PlanService],
    exports: [PlanService]
})

export class PlanModule {}

