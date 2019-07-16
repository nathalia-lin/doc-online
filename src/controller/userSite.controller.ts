import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateUserSiteDto } from '../dto/userSite.dto';
import { UserSiteService } from '../service/userSite.service';

@Controller('usersite')
export class UserSiteController {
    constructor(private readonly userSiteService: UserSiteService) { }

    @Post()
    create(@Body() createUserSiteDto: CreateUserSiteDto) {
        return this.userSiteService.create(createUserSiteDto);
    }

    @Get()
    showAll() {
        return this.userSiteService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') userSiteId: number) {
        return this.userSiteService.findOne(userSiteId);
    }

    @Delete(':id')
    deleteOne(@Param('id') userSiteId: number) {
        return this.userSiteService.deleteOne(userSiteId);
    }
}
