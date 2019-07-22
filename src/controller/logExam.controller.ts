import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateLogExamDto } from '../dto/logExam.dto';
import { LogExamService } from '../service/logExam.service';

@Controller('logexam')
export class LogExamController {
    constructor(private readonly logExamService: LogExamService) { }

    @Post()
    public async create(@Body() createLogExamDto: CreateLogExamDto) {
        return await this.logExamService.create(createLogExamDto);
    }

    @Get(':id')
    public async show(@Param('id') where: any) {
        return await this.logExamService.find(where);
    }

    @Delete(':id')
    public async deleteOne(@Param('id') logExamId: number) {
        return await this.logExamService.deleteOne(logExamId);
    }
}
