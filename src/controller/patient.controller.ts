import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';

import { CreatePatientDto } from '../dto/patient.dto';
import { PatientService } from '../service/patient.service';

@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) { }

    @Post()
    public async create(@Body() createPatientDto: CreatePatientDto) {
        return await this.patientService.create(createPatientDto);
    }

    @Get()
    public async show() {
        return await this.patientService.find({});
    }

    @Get(':id')
    public async showOne(@Param('id') id) {
        return await this.patientService.findOne(id);
    }

    @Patch(':id')
    public async update(@Param('id') id, @Body() body) {
        return await this.patientService.updateOne(id, body)
    }

    @Delete(':id')
    public async deleteOne(@Param('id') patientId: number) {
        return await this.patientService.deleteOne(patientId);
    }
}
