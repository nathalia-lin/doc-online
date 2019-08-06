import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';

import { CreateSiteNotificationDto } from '../dto/siteNotification.dto';
import { SiteNotificationService } from '../service/siteNotification.service';

/**
 * - POST /sitenotification            
 * - GET /sitenotification              
 * - GET /sitenotification/:id         
 * - PATCH /sitenotification/:id       
 * - DELETE /sitenotification/:id      
 */

@Controller('sitenotification')
export class SiteNotificationController {
    constructor(private readonly siteNotificationService: SiteNotificationService) { }

    @Post()
    public async create(@Body() createSiteNotificationDto: CreateSiteNotificationDto) {
        return await this.siteNotificationService.create(createSiteNotificationDto);
    }

    @Get()
    public async show() {
        return await this.siteNotificationService.find({});
    }

    @Get(':id')
    public async showOne(@Param('id') id) {
        return await this.siteNotificationService.findOne(id);
    }

    @Patch(':id')
    public async update(@Param('id') id, @Body() body) {
        return await this.siteNotificationService.updateOne(id, body)
    }

    @Delete(':id')
    public async deleteOne(@Param('id') siteNotificationId: number) {
        return await this.siteNotificationService.deleteOne(siteNotificationId);
    }
}
