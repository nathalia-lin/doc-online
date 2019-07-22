import { Injectable, NestMiddleware } from "@nestjs/common";
import * as jwt from 'jsonwebtoken'

import { LoginService } from "../service/login.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(
        private readonly loginService: LoginService 
    ) {}

    public async use(req, res, next) {

        console.log('IN MIDDLEWARE');
        const authHeaders = req.headers.authorization;
        if (authHeaders && (authHeaders as string).split(' ')[0] === 'Bearer') {
            const token = (authHeaders as string).split(' ')[1];
            const decoded: any = jwt.verify(token, 'secret');
            const user = await this.loginService.find({
                'id': decoded.id,
                'username': decoded.username,
            });
            if (!user) throw new Error('User not found');
            next();
        } else {
            throw new Error('Unauthorized user');
        }
    }
}