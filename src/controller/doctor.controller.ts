import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { DoctorService } from 'src/service/doctor.service';

@Controller('doctor')
export class DoctorController {
    constructor(private readonly doctorService: DoctorService) { }

    @Post()
    create(
        @Body('profileId') profileId: number,
        @Body('docType') docType: string,
        @Body('docIssuer') docIssuer: string,
        @Body('docNum') docNum: string
    ) {
        return this.doctorService.create(
            profileId,
            docType,
            docIssuer,
            docNum
        );
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
