import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateUserInsuranceDto } from '../dto/userInsurance.dto';
import { UserInsuranceService } from '../service/userInsurance.service';

@Controller('userinsurance')
export class UserInsuranceController {
    constructor(private readonly userInsuranceService: UserInsuranceService) { }

    @Post()
    public async create(@Body() createUserInsuranceDto: CreateUserInsuranceDto) {
        return await this.userInsuranceService.create(createUserInsuranceDto);
    }

    @Get(':id')
    public async showOne(@Param('id') where: any) {
        return await this.userInsuranceService.find(where);
    }

    @Delete(':id')
    public async deleteOne(@Param('id') userInsuranceId: number) {
        return await this.userInsuranceService.deleteOne(userInsuranceId);
    }
}
