import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateUserInsuranceDto } from '../dto/userInsurance.dto';
import { UserInsuranceService } from '../service/userInsurance.service';

@Controller('userinsurance')
export class UserInsuranceController {
    constructor(private readonly userInsuranceService: UserInsuranceService) { }

    @Post()
    create(@Body() createUserInsuranceDto: CreateUserInsuranceDto) {
        return this.userInsuranceService.create(createUserInsuranceDto);
    }

    @Get(':id')
    showOne(@Param('id') where: any) {
        return this.userInsuranceService.find(where);
    }

    @Delete(':id')
    deleteOne(@Param('id') userInsuranceId: number) {
        return this.userInsuranceService.deleteOne(userInsuranceId);
    }
}
