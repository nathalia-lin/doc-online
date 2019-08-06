import { Injectable, Inject } from "@nestjs/common";

import { CreateUserDto } from "../dto/user.dto";

import { ExamService } from "./exam.service";
import { CreateService } from "./create.service";

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
        @Inject('ExamService') private readonly examService: ExamService,
        @Inject('CreateService') private readonly createService: CreateService,
    ) { }

    /**
     * To create an admin, create a profile, user, service, and user site
     */
    public async createAdmin(
        token,
        networkId: string,
        socialName: string,
        name: string,
        sex: string,
        birthdate: string,
        phone: string,
        email: string,
        lastAccess: Date,
        profiles: string,
        active: boolean,
        recoveryKey: string,
        lastRecovery: Date,
        termApproved: Date,
        username: string,
        password: string,
    ) {
        const siteId = await this.examService.siteExists(networkId);
        const profile = await this.createService.createProfile(socialName, name, sex, birthdate, phone, email);
        const user = await this.createService.createUser(profile.id, lastAccess, profiles, active, recoveryKey, lastRecovery, termApproved);
        await this.createService.createLogin(user.id, username, password);
        let createdBy = null;
        if (token) {
            createdBy = await this.examService.createdBy(token.id);
        }
        await this.createService.createUserSite(user.id, siteId, createdBy);
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        return await this.userRepository.create<User>(createUserDto);;
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