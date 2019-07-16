import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateDoctorDto } from '../dto/doctor.dto';
import { DoctorService } from '../service/doctor.service';

@Controller('doctor')
export class DoctorController {
    constructor(private readonly doctorService: DoctorService) { }

    @Post()
    create(@Body() createDoctorDto: CreateDoctorDto) {
        return this.doctorService.create(createDoctorDto);
    }

    @Get()
    showAll() {
        return this.doctorService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') doctorId: number) {
        return this.doctorService.findOne(doctorId);
    }

    @Delete(':id')
    deleteOne(@Param('id') doctorId: number) {
        return this.doctorService.deleteOne(doctorId);
    }
}
