import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { CreateProfileDto } from '../dto/profile.dto';
import { ProfileService } from '../service/profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) { }

    @Post()
    public async create(@Body() createProfileDot: CreateProfileDto) {
        return await this.profileService.create(createProfileDot);
    }

    @Get(':id')
    public async showOne(@Param('id') where: any) {
        return await this.profileService.find(where);
    }

    @Delete(':id')
    public async deleteOne(@Param('id') profileId: number) {
        return await this.profileService.deleteOne(profileId);
    }
}
