import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreatePatientDto } from '../dto/patient.dto';
import { PatientService } from '../service/patient.service';

@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) { }

    @Post()
    public async create(@Body() createPatientDto: CreatePatientDto) {
        return await this.patientService.create(createPatientDto);
    }

    @Get(':id')
    public async showOne(@Param('id') where: any) {
        return await this.patientService.find(where);
    }

    @Delete(':id')
    public async deleteOne(@Param('id') patientId: number) {
        return await this.patientService.deleteOne(patientId);
    }
}
