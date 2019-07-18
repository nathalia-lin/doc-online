import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateInsuranceDto } from '../dto/insurance.dto';
import { InsuranceService } from '../service/insurance.service';

@Controller('insurance')
export class InsuranceController {
    constructor(private readonly insuranceService: InsuranceService) { }

    @Post()
    create(@Body() createInsuranceDto: CreateInsuranceDto) {
        return this.insuranceService.create(createInsuranceDto);
    }

    @Get(':id')
    show(@Param('id') where: any) {
        return this.insuranceService.find(where);
    }

    @Delete(':id')
    deleteOne(@Param('id') insuranceId: number) {
        return this.insuranceService.deleteOne(insuranceId);
    }
}
