import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';

import { CreateViewsDto } from '../dto/views.dto';
import { ViewsService } from '../service/views.service';

@Controller('views')
export class ViewsController {
    constructor(private readonly viewsService: ViewsService) { }

    @Post()
    public async create(@Body() createViewsDto: CreateViewsDto) {
        return await this.viewsService.create(createViewsDto);
    }

    @Get()
    public async show() {
        return await this.viewsService.find({});
    }

    @Get(':id')
    public async showOne(@Param('id') id) {
        return await this.viewsService.findOne(id);
    }

    @Patch(':id')
    public async update(@Param('id') id, @Body() body) {
        return await this.viewsService.updateOne(id, body)
    }

    @Delete(':id')
    public async deleteOne(@Param('id') viewId: number) {
        return await this.viewsService.deleteOne(viewId);
    }
}
