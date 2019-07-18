import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreatePlanDto } from '../dto/plan.dto';
import { PlanService } from '../service/plan.service';

@Controller('plan')
export class PlanController {
    constructor(private readonly planService: PlanService) { }

    @Post()
    create(@Body() createPlanDto: CreatePlanDto) {
        return this.planService.create(createPlanDto);
    }

    @Get(':id')
    showOne(@Param('id') where: any) {
        return this.planService.find(where);
    }

    @Delete(':id')
    deleteOne(@Param('id') planId: number) {
        return this.planService.deleteOne(planId);
    }
}
