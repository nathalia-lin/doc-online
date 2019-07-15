import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { InsuranceService } from 'src/service/insurance.service';

@Controller('insurance')
export class InsuranceController {
    constructor(private readonly insuranceService: InsuranceService) { }

    @Post()
    create(
        @Body('siteId') siteId: number,
        @Body('name') name: string
    ) {
        return this.insuranceService.create(
            siteId,
            name
        );
    }

    @Get()
    showAll() {
        return this.insuranceService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') insuranceId: number) {
        return this.insuranceService.findOne(insuranceId);
    }

    @Delete(':id')
    deleteOne(@Param('id') insuranceId: number) {
        return this.insuranceService.deleteOne(insuranceId);
    }
}
