import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { CreateSiteRuleDto } from '../dto/siteRule.dto';
import { SiteRuleService } from '../service/siteRule.service';

@Controller('siterule')
export class SiteRuleController {
    constructor(private readonly siteRuleService: SiteRuleService) { }

    @Post()
    public async create(@Body() createSiteRuleDto: CreateSiteRuleDto) {
        return await this.siteRuleService.create(createSiteRuleDto);
    }

    @Get(':id')
    public async showOne(@Param('id') where: any) {
        return await this.siteRuleService.find(where);
    }

    @Delete(':id')
    public async deleteOne(@Param('id') siteRuleId: number) {
        return await this.siteRuleService.deleteOne(siteRuleId);
    }
}
