import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateUserDto } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    public async create(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }

    @Get(':id')
    public async showOne(@Param('id') where: any) {
        return await this.userService.find(where);
    }

    @Delete(':id')
    public async deleteOne(@Param('id') userId: number) {
        return await this.userService.deleteOne(userId);
    }
}
