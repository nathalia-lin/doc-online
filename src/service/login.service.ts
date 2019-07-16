import { Injectable, Inject } from '@nestjs/common';

import { CreateLoginDto } from '../dto/login.dto';
import User from '../models/user.model';
import Login from '../models/login.model';

@Injectable()
export class LoginService {
    constructor(
        @Inject('LoginRepository') private readonly loginRepository: typeof Login
    ) { }

    async create(createLoginDto: CreateLoginDto): Promise<Login> {
        return  await this.loginRepository.create<Login>(createLoginDto);;
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
