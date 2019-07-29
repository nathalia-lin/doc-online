import { Injectable, Inject, forwardRef } from "@nestjs/common";

import { CreateUserDto } from "../dto/user.dto";

import { ExamService } from "./exam.service";
import { LoginService } from "./login.service";
import { ProfileService } from "./profile.service";
import { UserSiteService } from "./userSite.service";

import User from '../models/user.model';
import Profile from "../models/profile.model";
import Login from "../models/login.model";
import Site from "../models/site.model";
import Views from "../models/views.model";
import Insurance from "../models/insurance.model";

@Injectable()
export class UserService {

    constructor(
        @Inject('UserRepository') private readonly userRepository: typeof User,
    ) { }

    // public async createAdmin(
    //     token,
    //     networkId: string,
    //     socialName: string,
    //     name: string,
    //     sex: string,
    //     birthdate: Date,
    //     phone: string,
    //     email: string,
    //     lastAccess: Date,
    //     profiles: string,
    //     active: boolean,
    //     recoveryKey: string,
    //     lastRecovery: Date,
    //     termApproved: Date,
    //     username: string,
    //     password: string,
    // ) {
    //     const siteId = await this.examService.siteExists(networkId);
    //     const profile = await this.profileService.createProfile(socialName, name, sex, birthdate, phone, email);
    //     const user = await this.createUser(profile.id, lastAccess, profiles, active, recoveryKey, lastRecovery, termApproved);
    //     await this.loginService.createLogin(user.id, username, password);
    //     const createdBy = await this.examService.createdBy(token);
    //     await this.userSiteService.createUserSite(user.id, siteId, createdBy);
    // }

    async createUser(profileId, lastAccess, profiles, active, recoveryKey, lastRecovery, termApproved) {
        let newUser = {
            'profileId': profileId,
            'lastAccess': lastAccess,
            'profiles': profiles,
            'active': active,
            'recoveryKey': recoveryKey,
            'lastRecovery': lastRecovery,
            'termApproved': termApproved
        } as CreateUserDto;
        return await this.userRepository.create(newUser);
    }

    async find(where: object) {
        const user = await this.userRepository.findAll({
            where: where, include: [Profile, Login, Site, Views, Insurance]
        });
        return user;
    }

    async findOne(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const user = await this.userRepository.findOne({
            where: where, include: [Profile, Login, Site, Views, Insurance]
        });
        return user;
    }

    async updateOne(id: number, body: any) {
        return await this.userRepository.update(body, { where: { 'id': id } });
    }

    async deleteOne(userId: number) {
        const deletedUser = await this.userRepository.destroy({
            where: { 'id': userId }
        });
        return await deletedUser;
    }
}