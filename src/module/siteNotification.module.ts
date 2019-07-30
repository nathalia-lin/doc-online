import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { SiteNotificationService } from "../service/siteNotification.service";
import { SiteNotificationController } from "../controller/siteNotification.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [SiteNotificationController],
    providers: [SiteNotificationService],
    exports: [SiteNotificationService]
})

export class SiteNotificationModule { }
