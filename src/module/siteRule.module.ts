import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { SiteRuleController } from "../controller/siteRule.controller";
import { SiteRuleService } from "../service/siteRule.service";
import { SiteRuleProvider } from "../provider/siteRule.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [SiteRuleController],
    providers: [SiteRuleService, ...SiteRuleProvider],
    exports: [SiteRuleService]
})

export class SiteRuleModule { }
