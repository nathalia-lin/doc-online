import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { CreateSiteDto } from '../dto/site.dto';
import { SiteService } from '../service/site.service';

@Controller('site')
export class SiteController {
    constructor(private readonly siteService: SiteService) { }

    @Post()
    create(@Body() createSiteDto: CreateSiteDto) {
        return this.siteService.create(createSiteDto);
    }

    @Get()
    showAll() {
        return this.siteService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') siteId: number) {
        return this.siteService.findOne(siteId);
    }

    @Delete(':id')
    deleteOne(@Param('id') siteId: number) {
        return this.siteService.deleteOne(siteId);
    }
}
