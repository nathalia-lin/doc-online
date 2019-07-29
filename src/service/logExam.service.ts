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

    async createLogExam(examId) {
        let logExam = {
            'examId': examId,
            'postedData': null
        } as CreateLogExamDto;
        await this.logExamRepository.create(logExam);
    }

    async find(where: any) {
        const logExam = await this.logExamRepository.findAll({
            where: where
        });
        return logExam;
    }

    async findOne(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const logExam = await this.logExamRepository.findOne({
            where: where
        });
        return logExam;
    }

    async updateOne(id: number, body: any) {
        return await this.logExamRepository.update(body, { where: { 'id': id } });
    }

    async deleteOne(logExamId: number) {
        const deletedLogExam = await this.logExamRepository.destroy({
            where: { 'id': logExamId }
        });
        return await deletedLogExam;
    }

}
