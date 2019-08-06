import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';

import { CreateUserInsuranceDto } from '../dto/userInsurance.dto';
import { UserInsuranceService } from '../service/userInsurance.service';

/**
 * - POST /userinsurance             
 * - GET /userinsurance              
 * - GET /userinsurance/:id         
 * - PATCH /userinsurance/:id        
 * - DELETE /userinsurance/:id       
 */

@Controller('userinsurance')
export class UserInsuranceController {
    constructor(private readonly userInsuranceService: UserInsuranceService) { }

    @Post()
    public async create(@Body() createUserInsuranceDto: CreateUserInsuranceDto) {
        return await this.userInsuranceService.create(createUserInsuranceDto);
    }

    @Get()
    public async show() {
        return await this.userInsuranceService.find({});
    }

    @Get(':id')
    public async showOne(@Param('id') id) {
        return await this.userInsuranceService.findOne(id);
    }

    @Patch(':id')
    public async update(@Param('id') id, @Body() body) {
        return await this.userInsuranceService.updateOne(id, body)
    }

    @Delete(':id')
    public async deleteOne(@Param('id') userInsuranceId: number) {
        return await this.userInsuranceService.deleteOne(userInsuranceId);
    }
}
