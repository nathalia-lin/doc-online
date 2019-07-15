import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { PatientService } from 'src/service/patient.service';

@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) { }

    @Post()
    create(
        @Body('profileId') profileId: number,
        @Body('pid') pid: string
    ) {
        return this.patientService.create(
            profileId,
            pid
        );
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
