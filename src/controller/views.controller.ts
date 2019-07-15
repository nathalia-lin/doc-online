import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { ViewsService } from 'src/service/views.service';

@Controller('views')
export class ViewsController {
    constructor(private readonly viewsService: ViewsService) { }

    @Post()
    create(
        @Body('examId') examId: number,
        @Body('userId') userId: number,
        @Body('dateViewed') dateViewed: Date,
        @Body('typeViewed') typeViewed: string
    ) {
        return this.viewsService.create(
            examId,
            userId,
            dateViewed,
            typeViewed
        );
    }

    @Get()
    showAll() {
        return this.viewsService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') viewId: number) {
        return this.viewsService.findOne(viewId);
    }

    @Delete(':id')
    deleteOne(@Param('id') viewId: number) {
        return this.viewsService.deleteOne(viewId);
    }
}
