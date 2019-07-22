import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreatePlanDto } from '../dto/plan.dto';
import { PlanService } from '../service/plan.service';

@Controller('plan')
export class PlanController {
    constructor(private readonly planService: PlanService) { }

    @Post()
    public async create(@Body() createPlanDto: CreatePlanDto) {
        return await this.planService.create(createPlanDto);
    }

    @Get(':id')
    public async showOne(@Param('id') where: any) {
        return await this.planService.find(where);
    }

    @Delete(':id')
    public async deleteOne(@Param('id') planId: number) {
        return await this.planService.deleteOne(planId);
    }
}
