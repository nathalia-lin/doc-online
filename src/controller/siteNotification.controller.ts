import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { CreateSiteNotificationDto } from '../dto/siteNotification.dto';
import { SiteNotificationService } from '../service/siteNotification.service';

@Controller('sitenotification')
export class SiteNotificationController {
    constructor(private readonly siteNotificationService: SiteNotificationService) { }

    @Post()
    public async create(@Body() createSiteNotificationDto: CreateSiteNotificationDto) {
        return await this.siteNotificationService.create(createSiteNotificationDto);
    }

    @Get(':id')
    public async showOne(@Param('id') where: any) {
        return await this.siteNotificationService.find(where);
    }

    @Delete(':id')
    public async deleteOne(@Param('id') siteNotificationId: number) {
        return await this.siteNotificationService.deleteOne(siteNotificationId);
    }
}
