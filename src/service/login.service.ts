import { Injectable, Inject } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import crypto from 'crypto';

import { CreateLoginDto } from '../dto/login.dto';
import User from '../models/user.model';
import Login from '../models/login.model';

@Injectable()
export class LoginService {

    constructor(
        @Inject('LoginRepository') private readonly loginRepository: typeof Login
    ) { }

    async create(createLoginDto: CreateLoginDto): Promise<Login> {
        return await this.loginRepository.create<Login>(createLoginDto);;
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
        return this.getToken(authLogin);
    }

    async getToken(login: Login) {
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
