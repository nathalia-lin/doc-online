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

    @Get(':id')
    showOne(@Param('id') where: any) {
        return this.userSiteService.find(where);
    }

    @Delete(':id')
    deleteOne(@Param('id') userSiteId: number) {
        return this.userSiteService.deleteOne(userSiteId);
    }
}
