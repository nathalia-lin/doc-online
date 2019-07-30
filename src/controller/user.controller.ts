import { Controller, Get, Post, Body, Delete, Param, Patch, Req } from '@nestjs/common';

import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    public async create(@Body() body, @Req() req) {
        return await this.userService.createAdmin(
            req.token,
            body.networkId,
            body.socialName,
            body.name,
            body.sex,
            body.birthdate,
            body.phone,
            body.email,
            body.lastAccess,
            body.profiles,
            body.active,
            body.recoveryKey,
            body.lastRecovery,
            body.termApproved,
            body.username,
            body.password,
        );
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
