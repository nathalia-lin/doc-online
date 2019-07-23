import { Controller, Get, Post, Body, Put, Delete, Param, Res, HttpStatus } from '@nestjs/common';

import { CreateLoginDto } from '../dto/login.dto';
import { LoginService } from '../service/login.service';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }

    @Post()
    public async create(@Body() createLoginDto: CreateLoginDto) {
        return await this.loginService.create(createLoginDto);
    }

    @Post('auth')
    public async authenticate(
        @Body() body,
        @Res() res,
    ) {
        const token = await this.loginService.authenticate(body);
        res.status(HttpStatus.ACCEPTED).json(token);
        return token;
    }

    @Get(':id')
    public async showOne(@Param('id') where: any) {
        return await this.loginService.find(where);
    }

    @Delete(':id')
    public async deleteOne(@Param('id') loginId: number) {
        return await this.loginService.deleteOne(loginId);
    }
}
