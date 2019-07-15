import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SiteService } from '../service/site.service';

@Controller('site')
export class SiteController {
    constructor(private readonly siteService: SiteService) { }

    @Post()
    create(
        @Body('parentId') parentId: number,
        @Body('logo') logo: string,
        @Body('networkId') networkId: string,
        @Body('cnpj') cnpj: string,
        @Body('name') name: string,
        @Body('addressId') addressId: number
    ) {
        return this.siteService.create(
            parentId,
            logo,
            networkId,
            cnpj,
            name,
            addressId
        );
    }

    @Get()
    showAll() {
        return this.siteService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') siteId: number) {
        return this.siteService.findOne(siteId);
    }

    @Delete(':id')
    deleteOne(@Param('id') siteId: number) {
        return this.siteService.deleteOne(siteId);
    }
}
