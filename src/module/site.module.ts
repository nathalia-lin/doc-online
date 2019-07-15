import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { SiteController } from "../controller/site.controller";
import { SiteService } from "../service/site.service";
import { SiteProvider } from "../provider/site.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [SiteController],
    providers: [SiteService,...SiteProvider]
})

export class SiteModule { }
