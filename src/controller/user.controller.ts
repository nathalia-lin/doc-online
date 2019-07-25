import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';

import { CreateUserDto } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    public async create(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }

    @Get()
    public async show() {
        return await this.userService.find({});
    }

    @Get(':id')
    public async showOne(@Param('id') id) {
        return await this.userService.findOne(id);
    }

    @Patch(':id')
    public async update(@Param('id') id, @Body() body) {
        return await this.userService.updateOne(id, body)
    }

    @Delete(':id')
    public async deleteOne(@Param('id') userId: number) {
        return await this.userService.deleteOne(userId);
    }
}
