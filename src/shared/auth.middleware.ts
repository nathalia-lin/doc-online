import { Injectable, NestMiddleware, NotFoundException, UnauthorizedException } from "@nestjs/common";
import * as jwt from 'jsonwebtoken'

// change this to a guard? 

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    public async use(req, res, next) {
        console.log('IN MIDDLEWARE');
        const authHeaders = req.headers.authorization || '';
        let authorizationPatials = authHeaders.split(' ');
        if (authorizationPatials[0].trim() === 'Bearer') {
            const token = authorizationPatials[1].trim();
            const decoded: any = jwt.verify(token, 'secret');
            if (!decoded) throw new NotFoundException;
            req.token = decoded;
            next();
        } else {
            throw new UnauthorizedException;
        }
    }
}