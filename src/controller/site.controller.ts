import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { CreateSiteDto } from '../dto/site.dto';
import { SiteService } from '../service/site.service';

@Controller('site')
export class SiteController {
    constructor(private readonly siteService: SiteService) { }

    @Post()
    public async create(@Body() createSiteDto: CreateSiteDto) {
        return await this.siteService.create(createSiteDto);
    }

    @Get(':id')
    public async showOne(@Param('id') where: any) {
        return await this.siteService.find(where);
    }

    @Delete(':id')
    public async deleteOne(@Param('id') siteId: number) {
        return await this.siteService.deleteOne(siteId);
    }
}
