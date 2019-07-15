import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { UserSiteService } from 'src/service/userSite.service';

@Controller('usersite')
export class UserSiteController {
    constructor(private readonly userSiteService: UserSiteService) { }

    @Post()
    create(
        @Body('userId') userId: number,
        @Body('siteId') siteId: number,
        @Body('createdBy') createdBy: string
    ) {
        return this.userSiteService.create(
            userId,
            siteId,
            createdBy
        );
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
