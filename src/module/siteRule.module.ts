import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { SiteRuleController } from "src/controller/siteRule.controller";
import { SiteRuleService } from "src/service/siteRule.service";
import { SiteRuleProvider } from "../provider/siteRule.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [SiteRuleController],
    providers: [SiteRuleService, ...SiteRuleProvider]
})

export class SiteRuleModule { }
