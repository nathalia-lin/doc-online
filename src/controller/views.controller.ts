import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateViewsDto } from '../dto/views.dto';
import { ViewsService } from '../service/views.service';

@Controller('views')
export class ViewsController {
    constructor(private readonly viewsService: ViewsService) { }

    @Post()
    create(@Body() createViewsDto: CreateViewsDto) {
        return this.viewsService.create(createViewsDto);
    }

    @Get(':id')
    showOne(@Param('id') where: any) {
        return this.viewsService.find(where);
    }

    @Delete(':id')
    deleteOne(@Param('id') viewId: number) {
        return this.viewsService.deleteOne(viewId);
    }
}
