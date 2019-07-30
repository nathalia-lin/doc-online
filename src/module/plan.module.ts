import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { PlanController } from "../controller/plan.controller";
import { PlanService } from "../service/plan.service";
import { PlanProvider } from "../provider/plan.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [PlanController],
    providers: [PlanService, ...PlanProvider],
    exports: [PlanService]
})

export class PlanModule {}

