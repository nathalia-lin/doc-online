import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';

import { CreateLogExamDto } from '../dto/logExam.dto';
import { LogExamService } from '../service/logExam.service';

/**
 * - POST /logexam             
 * - GET /logexam              
 * - GET /logexam/:id          
 * - PATCH /logexam/:id       
 * - DELETE /logexam/:id     
 */

@Controller('logexam')
export class LogExamController {
    constructor(private readonly logExamService: LogExamService) { }

    @Post()
    public async create(@Body() createLogExamDto: CreateLogExamDto) {
        return await this.logExamService.create(createLogExamDto);
    }

    @Get()
    public async show() {
        return await this.logExamService.find({});
    }

    @Get(':id')
    public async showOne(@Param('id') id) {
        return await this.logExamService.findOne(id);
    }

    @Patch(':id')
    public async update(@Param('id') id, @Body() body) {
        return await this.logExamService.updateOne(id, body)
    }

    @Delete(':id')
    public async deleteOne(@Param('id') logExamId: number) {
        return await this.logExamService.deleteOne(logExamId);
    }
}
