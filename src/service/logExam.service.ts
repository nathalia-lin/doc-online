import { Injectable, Inject } from '@nestjs/common';

import { CreateLogExamDto } from '../dto/logExam.dto';
import LogExam from '../models/logExam.model';

@Injectable()
export class LogExamService {
    constructor(
        @Inject('LogExamRepository') private readonly logExamRepository: typeof LogExam
    ) { }

    async create(createLogExamDto: CreateLogExamDto): Promise<LogExam> {
        return await this.logExamRepository.create<LogExam>(createLogExamDto);;
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
