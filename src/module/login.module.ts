import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { LoginController } from "../controller/login.controller";
import { LoginService } from "../service/login.service";
import { AuthMiddleware } from "../shared/middlewares/auth.middleware";
import { LoginProvider } from "../provider/login.provider";

/**
 * Authentication Middleware routes:
 * - /exam
 * - /exam/search
 * - /user
 * 
 * - NOTE: If you clean the database, comment out /user to add an admin without login
*/

@Module({
    imports: [DatabaseModule],
    controllers: [LoginController],
    providers: [LoginService, ...LoginProvider],
    exports: [LoginService]
})

export class LoginModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .exclude(
                { path: '/login', method: RequestMethod.ALL },
                { path: '/site', method: RequestMethod.ALL }
            )
            .forRoutes(
                { path: '/exam', method: RequestMethod.ALL },
                { path: '/exam/search', method: RequestMethod.ALL }, 
                { path: '/user', method: RequestMethod.ALL },
            )
    }
}