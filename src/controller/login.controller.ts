import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { LoginService } from 'src/service/login.service';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }

    @Post()
    create(
        @Body('userId') userId: number,
        @Body('username') username: string,
        @Body('password') password: string
    ) {
        return this.loginService.create(
            userId,
            username,
            password
        );
    }

    @Get()
    showAll() {
        return this.loginService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') loginId: number) {
        return this.loginService.findOne(loginId);
    }

    @Delete(':id')
    deleteOne(@Param('id') loginId: number) {
        return this.loginService.deleteOne(loginId);
    }
}
