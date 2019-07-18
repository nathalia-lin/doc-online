import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateLoginDto } from '../dto/login.dto';
import { LoginService } from '../service/login.service';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }

    @Post()
    create(@Body() createLoginDto: CreateLoginDto) {
        return this.loginService.create(createLoginDto);
    }

    @Get(':id')
    showOne(@Param('id') where: any) {
        return this.loginService.find(where);
    }

    @Delete(':id')
    deleteOne(@Param('id') loginId: number) {
        return this.loginService.deleteOne(loginId);
    }
}
