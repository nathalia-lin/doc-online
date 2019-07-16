import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { CreateSiteRuleDto } from '../dto/siteRule.dto';
import { SiteRuleService } from '../service/siteRule.service';

@Controller('siterule')
export class SiteRuleController {
    constructor(private readonly siteRuleService: SiteRuleService) { }

    @Post()
    create(
        @Body() createSiteRuleDto: CreateSiteRuleDto) {
        return this.siteRuleService.create(createSiteRuleDto);
    }

    @Get()
    showAll() {
        return this.siteRuleService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') siteRuleId: number) {
        return this.siteRuleService.findOne(siteRuleId);
    }

    @Delete(':id')
    deleteOne(@Param('id') siteRuleId: number) {
        return this.siteRuleService.deleteOne(siteRuleId);
    }
}
