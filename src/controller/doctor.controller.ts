import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';

import { CreateDoctorDto } from '../dto/doctor.dto';
import { DoctorService } from '../service/doctor.service';

/**
 * - POST /doctor             
 * - GET /doctor              
 * - GET /doctor/:id         
 * - PATCH /doctor/:id       
 * - DELETE /doctor/:id      
 */

@Controller('doctor')
export class DoctorController {
    constructor(private readonly doctorService: DoctorService) { }

    @Post()
    public async create(@Body() createDoctorDto: CreateDoctorDto) {
        return await this.doctorService.create(createDoctorDto);
    }

    @Get()
    public async show() {
        return await this.doctorService.find({});
    }

    @Get(':id')
    public async showOne(@Param('id') id) {
        return await this.doctorService.findOne(id);
    }

    @Patch(':id')
    public async update(@Param('id') id, @Body() body) {
        return await this.doctorService.updateOne(id, body)
    }

    @Delete(':id')
    public async deleteOne(@Param('id') doctorId: number) {
        return await this.doctorService.deleteOne(doctorId);
    }
}
