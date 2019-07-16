import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';

import { CreateUserDto } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    showAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') userId: number) {
        return this.userService.findOne(userId);
    }

    @Delete(':id')
    deleteOne(@Param('id') userId: number) {
        return this.userService.deleteOne(userId);
    }
}
