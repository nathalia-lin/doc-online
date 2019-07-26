import { Controller, Get, Post, Body, Param, Res, HttpStatus } from '@nestjs/common';

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

    @Get()
    public async show() {
        return await this.loginService.find({});
    }

    @Get(':id')
    public async showOne(@Param('id') id) {
        return await this.loginService.findOne(id);
    }
}
