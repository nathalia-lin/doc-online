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