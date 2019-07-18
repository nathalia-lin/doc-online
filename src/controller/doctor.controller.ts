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

    // is it supposed to be id?
    @Get(':id')
    show(@Param('id') where: any) {
        return this.doctorService.find(where);
    }

    @Delete(':id')
    deleteOne(@Param('id') doctorId: number) {
        return this.doctorService.deleteOne(doctorId);
    }
}
