import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) { 
        console.log("STATUS CODE " + res.statusCode);
        console.log("REQUEST");
        console.log(req.headers["content-type"]);
        next()
    }
}
