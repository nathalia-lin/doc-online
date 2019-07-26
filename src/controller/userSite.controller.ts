import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';

import { CreateUserSiteDto } from '../dto/userSite.dto';
import { UserSiteService } from '../service/userSite.service';

@Controller('usersite')
export class UserSiteController {
    constructor(private readonly userSiteService: UserSiteService) { }

    @Post()
    public async create(@Body() createUserSiteDto: CreateUserSiteDto) {
        return await this.userSiteService.create(createUserSiteDto);
    }

    @Get()
    public async show() {
        return await this.userSiteService.find({});
    }

    @Get(':id')
    public async showOne(@Param('id') id) {
        return await this.userSiteService.findOne(id);
    }

    @Patch(':id')
    public async update(@Param('id') id, @Body() body) {
        return await this.userSiteService.updateOne(id, body)
    }

    @Delete(':id')
    public async deleteOne(@Param('id') userSiteId: number) {
        return await this.userSiteService.deleteOne(userSiteId);
    }
}
