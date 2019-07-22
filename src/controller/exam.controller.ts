import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateExamDto } from '../dto/exam.dto';
import { ExamService } from '../service/exam.service';

@Controller('exam')
export class ExamController {
    constructor(private readonly examService: ExamService) { }

    @Post()
    public async create(
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
        @Body('refPhysicianType') refPhysicianType: string,
        @Body('refPhysicianCRM (depreciado) | refPhysicianNum') refPhysicianCRM: string,
        @Body('refPhysicianUF') refPhysicianUF: string,
        @Body('refPhysicianName') refPhysicianName: string,
        @Body('protocolID') protocolID: string,
        @Body('protocolPwd') protocolPwd: string,
        // @Body('reportextension') reportextension: string,
        // @Body('report') report: string,
        // @Body('reportDate') reportDate: Date,
        @Body('readingPhysician') readingPhysician: string,
        @Body('reqPhysicianName') reqPhysicianName: string,
        // @Body('reviewedBy') reviewedBy: string,
        // @Body('echo') echo: boolean

    ) {
        return await this.examService.create(
            networkID,
            studyInstanceUID,
            studyDate,
            accessionNumber,
            // admissionId,
            // orderID,
            modality,
            studyStatus,
            // reqProcID,
            // reqProcDate,
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
            refPhysicianType,
            refPhysicianCRM,
            refPhysicianUF,
            refPhysicianName,
            protocolID,
            protocolPwd,
            // reportextension,
            // report,
            // reportDate,
            readingPhysician,
            reqPhysicianName,
            // reviewedBy
        );
    }

    @Post('search')
    public async search (){
        // req.header('authorization')
        // const success = jwt.verify(str...)
        // next()
    }

    @Get(':id')
    public async show(@Param('id')  where: any) {
        return await this.examService.find(where);
    }

    @Delete(':id')
    public async deleteOne(@Param('id') examId: number) {
        return await this.examService.deleteOne(examId);
    }
}
