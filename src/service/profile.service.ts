import { Injectable } from '@nestjs/common';

import { CreateProfileDto } from '../dto/profile.dto';
import Profile from '../models/profile.model';
import User from '../models/user.model';
import Patient from '../models/patient.model';
import Doctor from '../models/doctor.model';

@Injectable()
export class ProfileService {

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    return await Profile.create<Profile>(createProfileDto);;
  }

  async find(where: any) {
    const profiles = await Profile.findAll({
      where: where, include: [User, Patient, Doctor]
    });
    return profiles;
  }

  async findOne(where: any) {
    if (typeof where === 'string') {
      where = { 'id': where }
    }
    const profile = await Profile.findOne({
      where: where, include: [User, Patient, Doctor]
    });
    return profile;
  }

  async updateOne(id: number, body: any) {
    return await Profile.update(body, { where: { 'id': id } });
  }

  async deleteOne(profileId: number) {
    const deletedProfile = await Profile.destroy({
      where: { 'id': profileId }
    });
    return await deletedProfile;
  }
}
