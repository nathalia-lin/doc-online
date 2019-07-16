import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateLogExamDto } from '../dto/logExam.dto';
import { LogExamService } from '../service/logExam.service';

@Controller('logexam')
export class LogExamController {
    constructor(private readonly logExamService: LogExamService) { }

    @Post()
    create(@Body() createLogExamDto: CreateLogExamDto) {
        return this.logExamService.create(createLogExamDto);
    }

    @Get()
    showAll() {
        return this.logExamService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') logExamId: number) {
        return this.logExamService.findOne(logExamId);
    }

    @Delete(':id')
    deleteOne(@Param('id') logExamId: number) {
        return this.logExamService.deleteOne(logExamId);
    }
}
