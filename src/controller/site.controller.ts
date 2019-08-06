import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';

import { CreateSiteDto } from '../dto/site.dto';
import { SiteService } from '../service/site.service';

/**
 * - POST /site             
 * - GET /site             
 * - GET /site/:id          
 * - PATCH /site/:id       
 * - DELETE /site/:id      
 */

@Controller('site')
export class SiteController {
    constructor(private readonly siteService: SiteService) { }

    @Post()
    public async create(@Body() createSiteDto: CreateSiteDto) {
        return await this.siteService.create(createSiteDto);
    }

    @Get()
    public async show() {
        return await this.siteService.find({});
    }

    @Get(':id')
    public async showOne(@Param('id') id) {
        return await this.siteService.findOne(id);
    }

    @Patch(':id')
    public async update(@Param('id') id, @Body() body) {
        return await this.siteService.updateOne(id, body)
    }

    @Delete(':id')
    public async deleteOne(@Param('id') siteId: number) {
        return await this.siteService.deleteOne(siteId);
    }
}
