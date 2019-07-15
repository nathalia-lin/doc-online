import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { ExamService } from 'src/service/exam.service';

@Controller('exam')
export class ExamController {
    constructor(private readonly examService: ExamService) { }

    @Post()
    create(
        @Body('pid') pid: string,
        @Body('accessionNum') accessionNum: string,
        @Body('studyInstanceUID') studyInstanceUID: string,
        @Body('networkId') networkId: string,
        @Body('siteId') siteId: number,
        @Body('modality') modality: string,
        @Body('description') description: string,
        @Body('examDate') examDate: Date,
        @Body('statusType') statusType: string,
        @Body('patientId') patientId: number,
        @Body('requestingId') requestingId: number,
        @Body('consultingId') consultingId: number,
        @Body('insuranceId') insuranceId: number,
        @Body('lastReportView') lastReportView: Date,
        @Body('lastImageView') lastImageView: number
    ) {
        return this.examService.create(
            pid,
            accessionNum,
            studyInstanceUID,
            networkId,
            siteId,
            modality,
            description,
            examDate,
            statusType,
            patientId,
            requestingId,
            consultingId,
            insuranceId,
            lastReportView,
            lastImageView
        );
    }

    @Get()
    showAll() {
        return this.examService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') examId: number) {
        return this.examService.findOne(examId);
    }

    @Delete(':id')
    deleteOne(@Param('id') examId: number) {
        return this.examService.deleteOne(examId);
    }
}
