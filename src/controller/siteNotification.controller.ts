import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { CreateSiteNotificationDto } from '../dto/siteNotification.dto';
import { SiteNotificationService } from '../service/siteNotification.service';

@Controller('sitenotification')
export class SiteNotificationController {
    constructor(private readonly siteNotificationService: SiteNotificationService) { }

    @Post()
    create(@Body() createSiteNotificationDto: CreateSiteNotificationDto) {
        return this.siteNotificationService.create(createSiteNotificationDto);
    }

    @Get(':id')
    showOne(@Param('id') where: any) {
        return this.siteNotificationService.find(where);
    }

    @Delete(':id')
    deleteOne(@Param('id') siteNotificationId: number) {
        return this.siteNotificationService.deleteOne(siteNotificationId);
    }
}
