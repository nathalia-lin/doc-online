import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreatePatientDto } from '../dto/patient.dto';
import { PatientService } from '../service/patient.service';

@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) { }

    @Post()
    create(@Body() createPatientDto: CreatePatientDto) {
        return this.patientService.create(createPatientDto);
    }

    @Get()
    showAll() {
        return this.patientService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') patientId: number) {
        return this.patientService.findOne(patientId);
    }

    @Delete(':id')
    deleteOne(@Param('id') patientId: number) {
        return this.patientService.deleteOne(patientId);
    }
}
