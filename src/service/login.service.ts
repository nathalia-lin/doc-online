import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import crypto from 'crypto';

import { CreateLoginDto } from '../dto/login.dto';
import User from '../models/user.model';
import Login from '../models/login.model';

@Injectable()
export class LoginService {

    async create(createLoginDto: CreateLoginDto): Promise<Login> {
        return await Login.create<Login>(createLoginDto);;
    }

    async authenticate(login: Login) {
        const authLogin = await Login.findOne({
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

    async find(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where };
        }
        const login = await Login.findAll({
            where: where, include: [User]
        });
        return login;
    }

    async deleteOne(logId: number) {

        const deletedLog = await Login.destroy({
            where: { 'id': logId }
        });

        return await deletedLog;
    }
}
