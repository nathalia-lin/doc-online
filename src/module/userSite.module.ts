import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { UserSiteController } from "../controller/userSite.controller";
import { UserSiteService } from "../service/userSite.service";
import { UserSiteProvider } from "../provider/userSite.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [UserSiteController],
    providers: [UserSiteService, ...UserSiteProvider]
})

export class UserSiteModule { }
