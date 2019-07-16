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
