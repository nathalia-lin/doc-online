import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateViewsDto } from '../dto/views.dto';
import { ViewsService } from '../service/views.service';

@Controller('views')
export class ViewsController {
    constructor(private readonly viewsService: ViewsService) { }

    @Post()
    public async create(@Body() createViewsDto: CreateViewsDto) {
        return await this.viewsService.create(createViewsDto);
    }

    @Get(':id')
    public async showOne(@Param('id') where: any) {
        return await this.viewsService.find(where);
    }

    @Delete(':id')
    public async deleteOne(@Param('id') viewId: number) {
        return await this.viewsService.deleteOne(viewId);
    }
}
