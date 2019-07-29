import { Injectable, Inject, forwardRef } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import crypto from 'crypto';

import User from '../models/user.model';
import Login from '../models/login.model';

import { CreateLoginDto } from '../dto/login.dto';
import { UserService } from './user.service';
import { ProfileService } from './profile.service';

@Injectable()
export class LoginService {

    constructor(
        @Inject('LoginRepository') private readonly loginRepository: typeof Login,
        @Inject('UserService') private userService: UserService,
        @Inject('ProfileService') private profileService: ProfileService
    ) { }

    async create(createLoginDto: CreateLoginDto): Promise<Login> {
        return await this.loginRepository.create<Login>(createLoginDto);;
    }

    async createLogin(userId, username, password) {
        let login = {
            'userId': userId,
            'username': username,
            'password': password
        } as CreateLoginDto;
        await this.loginRepository.create(login);
    }

    async authenticate(login: Login) {
        const authLogin = await this.loginRepository.findOne({
            where: {
                'username': login.username,
                'password': crypto.createHmac('sha256', login.password).digest('hex')
            }
        })
        if (!login) {
            throw new Error('Login not Found');
        }
        return this.sendToken(authLogin);
    }

    async sendToken(login: Login) {
        login = await this.findOne(login.id);
        const user = await this.userService.findOne(login.userId);
        const profile = await this.profileService.findOne(user.profileId);
        const token = await this.createToken(login);

        const obj = {
            "username": login.username,
            "name": profile.name,
            "profile": user.profiles,
            "token": token
        }
        return obj;
    }

    async createToken(login: Login) {
        const options = {
            algorithm: 'HS256',
            expiresIn: '30 days',
            jwtid: ''
        };
        const payload = {
            'id': login.id,
            'username': login.username
        };
        return await jwt.sign(payload, 'secret', options);
    }

    async find(where: object) {
        const logins = await this.loginRepository.findAll({
            where: where, include: [User]
        });
        return logins;
    }

    async findOne(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const login = await this.loginRepository.findOne({
            where: where, include: [User]
        });
        return login;
    }

}
