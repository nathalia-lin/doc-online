import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { SiteRuleController } from "../controller/siteRule.controller";
import { SiteRuleService } from "../service/siteRule.service";

@Module({
    imports: [DatabaseModule],
    controllers: [SiteRuleController],
    providers: [SiteRuleService],
    exports: [SiteRuleService]
})

export class SiteRuleModule { }
