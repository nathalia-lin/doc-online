import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import Profile from 'src/models/profile.model';
import User from 'src/models/user.model';
import Patient from 'src/models/patient.model';
import Doctor from 'src/models/doctor.model';

@Injectable()
export class ProfileService {
  constructor(
    @Inject('ProfileRepository') private readonly profileRepository: typeof Profile
  ) { }

  async create(
    firstName: string,
    lastName: string,
    sex: string,
    birthdate: Date,
    phone: string,
    email: string
  ) {
    const id: string = uuid();
    const newProfile = await this.profileRepository.create({
      id,
      firstName,
      lastName,
      sex,
      birthdate,
      phone,
      email
    });

    return newProfile;
  }

  async findAll() {
    return await this.profileRepository.findAll<Profile>();
  }

  async findOne(profileId: number) {
    const profile = await this.profileRepository.findOne({
      where: { 'id': profileId }, include: [User, Patient, Doctor]
    });
    return profile;
  }

  async deleteOne(profileId: number) {

    const deletedProfile = await this.profileRepository.destroy({
      where: { 'id': profileId }
    });

    return await deletedProfile;
  }
}
