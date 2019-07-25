import { Injectable, Inject } from '@nestjs/common';

import { CreateProfileDto } from '../dto/profile.dto';
import Profile from '../models/profile.model';
import User from '../models/user.model';
import Patient from '../models/patient.model';
import Doctor from '../models/doctor.model';

@Injectable()
export class ProfileService {

  constructor(
    @Inject('ProfileRepository') private readonly profileRepository: typeof Profile
  ) { }

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    return await this.profileRepository.create<Profile>(createProfileDto);;
  }

  async find(where: any) {
    const profiles = await this.profileRepository.findAll({
      where: where, include: [User, Patient, Doctor]
    });
    return profiles;
  }

  async findOne(where: any) {
    if (typeof where === 'string') {
      where = { 'id': where }
    }
    const profile = await this.profileRepository.findOne({
      where: where, include: [User, Patient, Doctor]
    });
    return profile;
  }

  async updateOne(id: number, body: any) {
    return await this.profileRepository.update(body, { where: { 'id': id } });
  }

  async deleteOne(profileId: number) {

    const deletedProfile = await this.profileRepository.destroy({
      where: { 'id': profileId }
    });

    return await deletedProfile;
  }
}
