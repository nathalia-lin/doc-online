import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateInsuranceDto } from '../dto/insurance.dto';
import { InsuranceService } from '../service/insurance.service';

@Controller('insurance')
export class InsuranceController {
    constructor(private readonly insuranceService: InsuranceService) { }

    @Post()
    public async create(@Body() createInsuranceDto: CreateInsuranceDto) {
        return await this.insuranceService.create(createInsuranceDto);
    }

    @Get(':id')
    public async show(@Param('id') where: any) {
        return await this.insuranceService.find(where);
    }

    @Delete(':id')
    public async deleteOne(@Param('id') insuranceId: number) {
        return await this.insuranceService.deleteOne(insuranceId);
    }
}
