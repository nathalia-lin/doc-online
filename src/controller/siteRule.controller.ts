import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { CreateSiteRuleDto } from '../dto/siteRule.dto';
import { SiteRuleService } from '../service/siteRule.service';

@Controller('siterule')
export class SiteRuleController {
    constructor(private readonly siteRuleService: SiteRuleService) { }

    @Post()
    create(@Body() createSiteRuleDto: CreateSiteRuleDto) {
        return this.siteRuleService.create(createSiteRuleDto);
    }

    @Get(':id')
    showOne(@Param('id') where: any) {
        return this.siteRuleService.find(where);
    }

    @Delete(':id')
    deleteOne(@Param('id') siteRuleId: number) {
        return this.siteRuleService.deleteOne(siteRuleId);
    }
}
