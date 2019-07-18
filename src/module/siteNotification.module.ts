import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { SiteNotificationService } from "../service/siteNotification.service";
import { SiteNotificationController } from "../controller/siteNotification.controller";
import { SiteNotificationProvider } from "../provider/siteNotification.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [SiteNotificationController],
    providers: [SiteNotificationService, ...SiteNotificationProvider],
    exports: [SiteNotificationService]
})

export class SiteNotificationModule { }
