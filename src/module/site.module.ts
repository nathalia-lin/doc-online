import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { SiteController } from "../controller/site.controller";
import { SiteService } from "../service/site.service";

@Module({
    imports: [DatabaseModule],
    controllers: [SiteController],
    providers: [SiteService],
    exports: [SiteService]
})

export class SiteModule { }
