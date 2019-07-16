import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateExamDto } from '../dto/exam.dto';
import { ExamService } from '../service/exam.service';

@Controller('exam')
export class ExamController {
    constructor(private readonly examService: ExamService) { }

    @Post()
    create(@Body() createExamDto: CreateExamDto) {
        return this.examService.create(createExamDto);
    }

    @Get()
    showAll() {
        return this.examService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') examId: number) {
        return this.examService.findOne(examId);
    }

    @Delete(':id')
    deleteOne(@Param('id') examId: number) {
        return this.examService.deleteOne(examId);
    }
}
