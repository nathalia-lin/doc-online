import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateDoctorDto } from '../dto/doctor.dto';
import { DoctorService } from '../service/doctor.service';
import Doctor from '../models/doctor.model';

@Controller('doctor')
export class DoctorController {
    constructor(private readonly doctorService: DoctorService) { }

    @Post()
    public async create(@Body() createDoctorDto: CreateDoctorDto) {
        return await this.doctorService.create(createDoctorDto);
    }

    @Get(':id')
    public async show(@Param('id') where: any) {
        return await this.doctorService.find(where);
    }

    @Get()
    public async showAll() {
        return await Doctor.findAll();
    }

    @Delete(':id')
    public async deleteOne(@Param('id') doctorId: number) {
        return await this.doctorService.deleteOne(doctorId);
    }
}
