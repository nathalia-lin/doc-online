import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateDoctorDto } from '../dto/doctor.dto';
import { DoctorService } from '../service/doctor.service';

@Controller('doctor')
export class DoctorController {
    constructor(private readonly doctorService: DoctorService) { }

    @Post()
    public async create(@Body() createDoctorDto: CreateDoctorDto) {
        return await this.doctorService.create(createDoctorDto);
    }

    // is it supposed to be id?
    @Get(':id')
    public async show(@Param('id') where: any) {
        return await this.doctorService.find(where);
    }

    @Delete(':id')
    public async deleteOne(@Param('id') doctorId: number) {
        return await this.doctorService.deleteOne(doctorId);
    }
}
