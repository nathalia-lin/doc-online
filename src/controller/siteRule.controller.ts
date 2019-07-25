import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';

import { CreateSiteRuleDto } from '../dto/siteRule.dto';
import { SiteRuleService } from '../service/siteRule.service';

@Controller('siterule')
export class SiteRuleController {
    constructor(private readonly siteRuleService: SiteRuleService) { }

    @Post()
    public async create(@Body() createSiteRuleDto: CreateSiteRuleDto) {
        return await this.siteRuleService.create(createSiteRuleDto);
    }

    @Get()
    public async show() {
        return await this.siteRuleService.find({});
    }

    @Get(':id')
    public async showOne(@Param('id') id) {
        return await this.siteRuleService.findOne(id);
    }

    @Patch(':id')
    public async update(@Param('id') id, @Body() body) {
        return await this.siteRuleService.updateOne(id, body)
    }

    @Delete(':id')
    public async deleteOne(@Param('id') siteRuleId: number) {
        return await this.siteRuleService.deleteOne(siteRuleId);
    }
}
