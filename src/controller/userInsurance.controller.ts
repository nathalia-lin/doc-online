import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { UserInsuranceService } from 'src/service/userInsurance.service';

@Controller('userinsurance')
export class UserInsuranceController {
    constructor(private readonly userInsuranceService: UserInsuranceService) { }

    @Post()
    create(
        @Body('insuranceId') insuranceId: number,
        @Body('userId') userId: number
    ) {
        return this.userInsuranceService.create(
            insuranceId,
            userId
        );
    }

    @Get()
    showAll() {
        return this.userInsuranceService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') userInsuranceId: number) {
        return this.userInsuranceService.findOne(userInsuranceId);
    }

    @Delete(':id')
    deleteOne(@Param('id') userInsuranceId: number) {
        return this.userInsuranceService.deleteOne(userInsuranceId);
    }
}
