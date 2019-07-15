import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import User from 'src/models/user.model';
import Login from 'src/models/login.model';

@Injectable()
export class LoginService {
    constructor(
        @Inject('LoginRepository') private readonly loginRepository: typeof Login
    ) { }

    async create(
        userId: number,
        username: string,
        password: string
    ) {
        const id: string = uuid();
        const newLogin = await this.loginRepository.create({
            id,
            userId,
            username,
            password
        });

        return newLogin;
    }

    async findAll() {
        return await this.loginRepository.findAll<Login>();
    }

    async findOne(loginId: number) {
        const login = await this.loginRepository.findOne({
            where: { 'id': loginId }, include: [User]
        });
        return login;
    }

    async deleteOne(logId: number) {

        const deletedLog = await this.loginRepository.destroy({
            where: { 'id': logId }
        });

        return await deletedLog;
    }
}
