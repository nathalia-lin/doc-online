import { Injectable } from '@nestjs/common';

import { CreateLogExamDto } from '../dto/logExam.dto';
import LogExam from '../models/logExam.model';

@Injectable()
export class LogExamService {

    async create(createLogExamDto: CreateLogExamDto): Promise<LogExam> {
        return await LogExam.create<LogExam>(createLogExamDto);;
    }

    async find(where: any) {
        const logExam = await LogExam.findAll({
            where: where
        });
        return logExam;
    }

    async findOne(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const logExam = await LogExam.findOne({
            where: where
        });
        return logExam;
    }

    async updateOne(id: number, body: any) {
        return await LogExam.update(body, { where: { 'id': id } });
    }

    async deleteOne(logExamId: number) {
        const deletedLogExam = await LogExam.destroy({
            where: { 'id': logExamId }
        });
        return await deletedLogExam;
    }

}
