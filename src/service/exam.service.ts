import { Injectable, Inject } from '@nestjs/common';

import { CreateExamDto } from '../dto/exam.dto';
import Exam from '../models/exam.model';
import Site from '../models/site.model';
import Patient from '../models/patient.model';
import Doctor from '../models/doctor.model';
import Insurance from '../models/insurance.model';
import Views from '../models/views.model';

@Injectable()
export class ExamService {
    constructor(
        @Inject('ExamRepository') private readonly examRepository: typeof Exam
    ) { }

    async create(createExamDto: CreateExamDto): Promise<Exam> {
        try {
            return await this.examRepository.create<Exam>(createExamDto);
       }
       catch(err) {
           console.log(err)
       }
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
