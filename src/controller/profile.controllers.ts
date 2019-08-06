import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';

import { CreateProfileDto } from '../dto/profile.dto';
import { ProfileService } from '../service/profile.service';

/**
 * - POST /profile             
 * - GET /profile             
 * - GET /profile/:id        
 * - PATCH /profile/:id       
 * - DELETE /profile/:id      
 */

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) { }

    @Post()
    public async create(@Body() createProfileDot: CreateProfileDto) {
        return await this.profileService.create(createProfileDot);
    }

    @Get()
    public async show() {
        return await this.profileService.find({});
    }

    @Get(':id')
    public async showOne(@Param('id') id) {
        return await this.profileService.findOne(id);
    }

    @Patch(':id')
    public async update(@Param('id') id, @Body() body) {
        return await this.profileService.updateOne(id, body)
    }

    @Delete(':id')
    public async deleteOne(@Param('id') profileId: number) {
        return await this.profileService.deleteOne(profileId);
    }
}
