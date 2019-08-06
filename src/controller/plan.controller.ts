import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';

import { CreatePlanDto } from '../dto/plan.dto';
import { PlanService } from '../service/plan.service';

/**
 * - POST /plan             
 * - GET /plan              
 * - GET /plan/:id         
 * - PATCH /plan/:id       
 * - DELETE /plan/:id       
 */

@Controller('plan')
export class PlanController {
    constructor(private readonly planService: PlanService) { }

    @Post()
    public async create(@Body() createPlanDto: CreatePlanDto) {
        return await this.planService.create(createPlanDto);
    }

    @Get()
    public async show() {
        return await this.planService.find({});
    }

    @Get(':id')
    public async showOne(@Param('id') id) {
        return await this.planService.findOne(id);
    }

    @Patch(':id')
    public async update(@Param('id') id, @Body() body) {
        return await this.planService.updateOne(id, body)
    }

    @Delete(':id')
    public async deleteOne(@Param('id') planId: number) {
        return await this.planService.deleteOne(planId);
    }
}
