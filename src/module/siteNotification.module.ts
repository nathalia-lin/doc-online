import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { SiteNotificationService } from "src/service/siteNotification.service";
import { SiteNotificationController } from "src/controller/siteNotification.controller";
import { SiteNotificationProvider } from "../provider/siteNotification.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [SiteNotificationController],
    providers: [SiteNotificationService, ...SiteNotificationProvider]
})

export class SiteNotificationModule { }
