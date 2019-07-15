import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { LogExamService } from 'src/service/logExam.service';

@Controller('logexam')
export class LogExamController {
    constructor(private readonly logExamService: LogExamService) { }

    @Post()
    create(
        @Body('examId') examId: number,
        @Body('datePosted') datePosted: Date,
        @Body('postedData') postedData: string
    ) {
        return this.logExamService.create(
            examId,
            datePosted,
            postedData
        );
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
