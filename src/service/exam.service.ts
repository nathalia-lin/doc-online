import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import Exam from 'src/models/exam.model';
import Site from 'src/models/site.model';
import Patient from 'src/models/patient.model';
import Doctor from 'src/models/doctor.model';
import Insurance from 'src/models/insurance.model';
import Views from 'src/models/views.model';

@Injectable()
export class ExamService {
    constructor(
        @Inject('ExamRepository') private readonly examRepository: typeof Exam
    ) { }

    async create(
        pid: string,
        accessionNum: string,
        studyInstanceUID: string,
        networkId: string,
        siteId: number,
        modality: string,
        description: string,
        examDate: Date,
        statusType: string,
        patientId: number,
        requestingId: number,
        consultingId: number,
        insuranceId: number,
        lastReportView: Date,
        lastImageView: number
    ) {
        const id: string = uuid();
        const newExam = await this.examRepository.create({
            id,
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
        });

        return newExam;
    }

    async findAll() {
        return await this.examRepository.findAll<Exam>();
    }

    async findOne(examId: number) {
        const exam = await this.examRepository.findOne({
            where: { 'id': examId }, include: [Site, Patient, Doctor, Insurance, Views]
        });
        return exam;
    }

    async deleteOne(examId: number) {

        const deletedExam = await this.examRepository.destroy({
            where: { 'id': examId }
        });

        return await deletedExam;
    }
}
