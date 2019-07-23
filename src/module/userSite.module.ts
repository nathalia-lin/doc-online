import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { UserSiteController } from "../controller/userSite.controller";
import { UserSiteService } from "../service/userSite.service";

@Module({
    imports: [DatabaseModule],
    controllers: [UserSiteController],
    providers: [UserSiteService],
    exports: [UserSiteService]
})

export class UserSiteModule { }
