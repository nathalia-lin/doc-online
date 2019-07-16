import { Injectable, Inject } from "@nestjs/common";

import { CreateUserDto } from "../dto/user.dto";
import User from '../models/user.model';
import Profile from "../models/profile.model";
import Login from "../models/login.model";
import Site from "../models/site.model";
import Views from "../models/views.model";
import Insurance from "../models/insurance.model";

@Injectable()
export class UserService {

    constructor(
        @Inject('UserRepository') private readonly userRepository: typeof User
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        return await this.userRepository.create<User>(createUserDto);
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