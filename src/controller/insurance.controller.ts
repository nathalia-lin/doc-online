import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';

import { CreateInsuranceDto } from '../dto/insurance.dto';
import { InsuranceService } from '../service/insurance.service';

/**
 * - POST /insurance            
 * - GET /insurance              
 * - GET /insurance/:id          
 * - PATCH /insurance/:id        
 * - DELETE /insurance/:id       
 */

@Controller('insurance')
export class InsuranceController {
    constructor(private readonly insuranceService: InsuranceService) { }

    @Post()
    public async create(@Body() createInsuranceDto: CreateInsuranceDto) {
        return await this.insuranceService.create(createInsuranceDto);
    }

    @Get()
    public async show() {
        return await this.insuranceService.find({});
    }

    @Get(':id')
    public async showOne(@Param('id') id) {
        return await this.insuranceService.findOne(id);
    }

    @Patch(':id')
    public async update(@Param('id') id, @Body() body) {
        return await this.insuranceService.updateOne(id, body)
    }

    @Delete(':id')
    public async deleteOne(@Param('id') insuranceId: number) {
        return await this.insuranceService.deleteOne(insuranceId);
    }
}
