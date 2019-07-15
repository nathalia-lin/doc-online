import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { ProfileService } from 'src/service/profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) { }

    @Post()
    create(
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('sex') sex: string,
        @Body('birthdate') birthdate: Date,
        @Body('phone') phone: string,
        @Body('email') email: string
    ) {
        return this.profileService.create(
            firstName, 
            lastName, 
            sex, 
            birthdate, 
            phone, 
            email);
    }

    @Get()
    showAll() {
        return this.profileService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') profileId: number) {
        return this.profileService.findOne(profileId);
    }

    @Delete(':id')
    deleteOne(@Param('id') profileId: number) {
        return this.profileService.deleteOne(profileId);
    }
}
