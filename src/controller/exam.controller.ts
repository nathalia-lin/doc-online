import { Controller, Get, Post, Body, Delete, Param, Req, Patch, BadRequestException } from '@nestjs/common';

import { ExamService } from '../service/exam.service';

@Controller('exam')
export class ExamController {
    constructor(private readonly examService: ExamService) { }

    @Post()
    public async create(
        @Req() req,
        @Body('networkID') networkID: string,
        @Body('studyInstanceUID') studyInstanceUID: string,
        @Body('studyDate') studyDate: Date,
        @Body('accessionNumber') accessionNumber: string,
        // @Body('admissionID') admissionId: number,
        // @Body('orderID') orderID: number,
        @Body('modality') modality: string,
        @Body('studyStatus') studyStatus: string,
        // @Body('reqProcID') reqProcID: number,
        // @Body('reqProcDate') reqProcDate: Date,
        @Body('reqProcDescription') reqProcDescription: string,
        @Body('insuranceID') insuranceID: number,
        @Body('insuranceName') insuranceName: string,
        @Body('planID') planID: number,
        @Body('planName') planName: string,
        @Body('patientID') patientID: number,
        @Body('patientName') patientName: string,
        @Body('patientSocialName') patientSocialName: string,
        @Body('patientBirthDate') patientBirthDate: Date,
        @Body('patientSex') patientSex: string,
        @Body('patientPhone') patientPhone: string,
        @Body('patientEmail') patientEmail: string,
        @Body('patientPID') patientPID: string,
        @Body('protocolID') protocolID: string,
        @Body('protocolPwd') protocolPwd: string,
        // @Body('reportextension') reportextension: string,
        // @Body('report') report: string,
        // @Body('reportDate') reportDate: Date,
        @Body('reqPhysicianType') reqPhysicianType: string,
        @Body('reqPhysicianNum') reqPhysicianNum: string,
        @Body('reqPhysicianUF') reqPhysicianUF: string,
        @Body('reqPhysicianName') reqPhysicianName: string,
        @Body('refPhysicianType') refPhysicianType: string,
        @Body('refPhysicianNum') refPhysicianNum: string,
        @Body('refPhysicianUF') refPhysicianUF: string,
        @Body('refPhysicianName') refPhysicianName: string,
        // @Body('reviewedBy') reviewedBy: string,
        // @Body('echo') echo: boolean

    ) {
        try {
            return await this.examService.create(
                req.token,
                networkID,
                studyInstanceUID,
                studyDate,
                accessionNumber,
                modality,
                studyStatus,
                reqProcDescription,
                insuranceID,
                insuranceName,
                planID,
                planName,
                patientID,
                patientName,
                patientSocialName,
                patientBirthDate,
                patientSex,
                patientPhone,
                patientEmail,
                patientPID,
                protocolID,
                protocolPwd,
                reqPhysicianType,
                reqPhysicianNum,
                reqPhysicianUF,
                reqPhysicianName,
                refPhysicianType,
                refPhysicianNum,
                refPhysicianUF,
                refPhysicianName,
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
