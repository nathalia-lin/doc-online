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

    @Get(':id')
    showOne(@Param('id') where: any) {
        return this.userService.find(where);
    }

    @Delete(':id')
    deleteOne(@Param('id') userId: number) {
        return this.userService.deleteOne(userId);
    }
}
