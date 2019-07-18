import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { CreateProfileDto } from '../dto/profile.dto';
import { ProfileService } from '../service/profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) { }

    @Post()
    create(@Body() createProfileDot: CreateProfileDto) {
        return this.profileService.create(createProfileDot);
    }

    @Get(':id')
    showOne(@Param('id') where: any) {
        return this.profileService.find(where);
    }

    @Delete(':id')
    deleteOne(@Param('id') profileId: number) {
        return this.profileService.deleteOne(profileId);
    }
}
