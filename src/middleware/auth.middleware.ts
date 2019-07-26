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
        const authHeaders = req.headers.authorization || '';
        let authorizationPatials = authHeaders.split(' ');
        if (authorizationPatials[0].trim() === 'Bearer') {
            const token = authorizationPatials[1].trim();
            const decoded: any = jwt.verify(token, 'secret');
            if (!decoded) throw new Error('User not found');
            req.token = decoded;
            next();
        } else {
            throw new Error('Unauthorized user');
        }
    }
}