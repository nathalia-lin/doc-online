import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    create(
        @Body('profileId') profileId: number,
        @Body('lastAccess') lastAccess: Date,
        @Body('profiles') profiles: string,
        @Body('active') active: boolean,
        @Body('recoveryKey') recoveryKey: string,
        @Body('lastRecovery') lastRecovery: Date,
        @Body('termApproved') termApproved: Date,
    ) {
        return this.userService.create(
            profileId,
            lastAccess,
            profiles,
            active,
            recoveryKey,
            lastRecovery,
            termApproved
        );
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
