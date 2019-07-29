import { Controller, Get, Post, Body, Delete, Param, Req, Patch, BadRequestException } from '@nestjs/common';

import { ExamService } from '../service/exam.service';

@Controller('exam')
export class ExamController {
    constructor(private readonly examService: ExamService) { }

    @Post()
    public async create(
        @Req() req,
        @Body() body    
    ) {
        try {
            return await this.examService.create(
                req.token,
                body.networkID,
                body.studyInstanceUID,
                body.studyDate,
                body.accessionNumber,
                // body.admissionID,
                // body.orderID
                body.modality,
                body.studyStatus,
                // body.reqProcID,
                // body.reqProcDate
                body.reqProcDescription,
                body.insuranceID,
                body.insuranceName,
                body.planID,
                body.planName,
                body.patientID,
                body.patientName,
                body.patientSocialName,
                body.patientBirthDate,
                body.patientSex,
                body.patientPhone,
                body.patientEmail,
                body.patientPID,
                body.protocolID,
                body.protocolPwd,
                // body.reportextension,
                // body.report,
                // body.reportDate,
                body.reqPhysicianType,
                body.reqPhysicianNum,
                body.reqPhysicianUF,
                body.reqPhysicianName,
                body.refPhysicianType,
                body.refPhysicianNum,
                body.refPhysicianUF,
                body.refPhysicianName,
                // body.reviewedBy,
                // body.echo
            );
        }
        catch (SequelizeDatabaseError) {
            throw new BadRequestException(SequelizeDatabaseError);
        }
    }

    @Post('search')
    public async search(@Body() body, @Req() req) {
        try {
            return await this.examService.search(body, req.token);
        } 
        catch (SequelizeDatabaseError) {
            throw new BadRequestException(SequelizeDatabaseError);
        }
    }

    @Get()
    public async show() {
        return await this.examService.find({});
    }

    @Get(':id')
    public async showOne(@Param('id') id) {
        return await this.examService.findOne(id);
    }

    @Patch(':id')
    public async update(@Param('id') id, @Body() body) {
        return await this.examService.updateOne(id, body)
    }

    @Delete(':id')
    public async deleteOne(@Param('id') examId: number) {
        return await this.examService.deleteOne(examId);
    }
}
