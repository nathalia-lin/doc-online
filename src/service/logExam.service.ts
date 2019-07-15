import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import LogExam from 'src/models/logExam.model';

@Injectable()
export class LogExamService {
    constructor(
        @Inject('LogExamRepository') private readonly logExamRepository: typeof LogExam
    ) { }

    async create(
        examId: number,
        datePosted: Date,
        postedData: string
    ) {
        const id: string = uuid();
        const newLogExam = await this.logExamRepository.create({
            id,
            examId,
            datePosted,
            postedData
        });

        return newLogExam;
    }

    async findAll() {
        return await this.logExamRepository.findAll<LogExam>();
    }

    async findOne(logExamId: number) {
        const logExam = await this.logExamRepository.findOne({
            where: { 'id': logExamId }
        });
        return logExam;
    }

    async deleteOne(logExamId: number) {

        const deletedLogExam = await this.logExamRepository.destroy({
            where: { 'id': logExamId }
        });

        return await deletedLogExam;
    }

}
