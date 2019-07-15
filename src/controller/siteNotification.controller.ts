import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SiteNotificationService } from 'src/service/siteNotification.service';

@Controller('sitenotification')
export class SiteNotificationController {
    constructor(private readonly siteNotificationService: SiteNotificationService) { }

    @Post()
    create(
        @Body('siteId') siteId: number,
        @Body('type') type: string,
        @Body('smtpHostname') smtpHostname: string,
        @Body('smtpPort') smtpPort: string,
        @Body('smptUsername') smptUsername: string,
        @Body('smptPassword') smptPassword: string,
        @Body('smptSsl') smptSsl: boolean,
        @Body('smsHostname') smsHostname: string,
        @Body('smsPort') smsPort: number,
        @Body('smsUsername') smsUsername: string,
        @Body('smsPassword') smsPassword: string
    ) {
        return this.siteNotificationService.create(
            siteId,
            type,
            smtpHostname,
            smtpPort,
            smptUsername,
            smptPassword,
            smptSsl,
            smsHostname,
            smsPort,
            smsUsername,
            smsPassword
        );
    }

    @Get()
    showAll() {
        return this.siteNotificationService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') siteNotificationId: number) {
        return this.siteNotificationService.findOne(siteNotificationId);
    }

    @Delete(':id')
    deleteOne(@Param('id') siteNotificationId: number) {
        return this.siteNotificationService.deleteOne(siteNotificationId);
    }
}
