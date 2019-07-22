import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateUserSiteDto } from '../dto/userSite.dto';
import { UserSiteService } from '../service/userSite.service';

@Controller('usersite')
export class UserSiteController {
    constructor(private readonly userSiteService: UserSiteService) { }

    @Post()
    public async create(@Body() createUserSiteDto: CreateUserSiteDto) {
        return await this.userSiteService.create(createUserSiteDto);
    }

    @Get(':id')
    public async showOne(@Param('id') where: any) {
        return await this.userSiteService.find(where);
    }

    @Delete(':id')
    public async deleteOne(@Param('id') userSiteId: number) {
        return await this.userSiteService.deleteOne(userSiteId);
    }
}
