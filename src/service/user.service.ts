import { Injectable, Inject } from "@nestjs/common";
import { v4 as uuid } from 'uuid';

import User from '../models/user.model';
import Profile from "src/models/profile.model";
import Login from "src/models/login.model";
import UserSite from "src/models/userSite.model";
import Site from "src/models/site.model";
import Views from "src/models/views.model";
import Insurance from "src/models/insurance.model";

@Injectable()
export class UserService {

    constructor(
        @Inject('UserRepository') private readonly userRepository: typeof User
    ) { }

    async create(
        profileId: number,
        lastAccess: Date,
        profiles: string,
        active: boolean,
        recoveryKey: string,
        lastRecovery: Date,
        termApproved: Date
    ) {
        const id: string = uuid();
        const newUser = await this.userRepository.create({
            id,
            profileId,
            lastAccess,
            profiles,
            active,
            recoveryKey,
            lastRecovery,
            termApproved
        });

        return newUser;
    }
    public async findAll() {
        return await this.userRepository.findAll<User>();
    }

    async findOne(userId: number) {
        const user = await this.userRepository.findOne({
            where: { 'id': userId }, include: [Profile, Login, Site, Views, Insurance]
        });
        return user;
    }

    async deleteOne(userId: number) {

        const deletedUser = await this.userRepository.destroy({
            where: { 'id': userId }
        });

        return await deletedUser;
    }
}