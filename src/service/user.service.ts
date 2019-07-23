import { Injectable } from "@nestjs/common";

import { CreateUserDto } from "../dto/user.dto";
import User from '../models/user.model';
import Profile from "../models/profile.model";
import Login from "../models/login.model";
import Site from "../models/site.model";
import Views from "../models/views.model";
import Insurance from "../models/insurance.model";

@Injectable()
export class UserService {

    async create(createUserDto: CreateUserDto): Promise<User> {
        return await User.create<User>(createUserDto);
    }

    async find(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where };
        }
        const user = await User.findAll({
            where: where, include: [Profile, Login, Site, Views, Insurance]
        });
        return user;
    }

    async deleteOne(userId: number) {

        const deletedUser = await User.destroy({
            where: { 'id': userId }
        });

        return await deletedUser;
    }
}