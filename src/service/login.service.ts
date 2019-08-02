import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import crypto from 'crypto';

import { CreateLoginDto } from '../dto/login.dto';
import Login from '../models/login.model';

import User from '../models/user.model';
import Profile from '../models/profile.model';

@Injectable()
export class LoginService {

    constructor(
        @Inject('LoginRepository') private readonly loginRepository: typeof Login
    ) { }

    async create(createLoginDto: CreateLoginDto): Promise<Login> {
        return await Login.create<Login>(createLoginDto);;
    }

    async authenticate(login: Login) {
        const authLogin = await this.loginRepository.findOne({
            where: {
                'username': login.username,
                'password': login.password,
                'passwordHash': crypto.createHmac('sha256', login.password).digest('hex')
            }
        })
        if (!authLogin) {
            throw new UnauthorizedException('Login not Found');
        }
        return this.sendToken(authLogin);
    }

    async sendToken(login: Login) {
        login = await this.findOne(login.id);
        const user = await User.findByPk(login.userId);
        const profile = await Profile.findByPk(user.profileId);
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

    async updateOne(id: number, body: any) {
        return await Login.update(body, { where: { 'id': id } });
    }

    async deleteOne(loginId: number) {
        const deletedLogin = await this.loginRepository.destroy({
            where: { 'id': loginId }
        });
        return await deletedLogin;
    }

}
