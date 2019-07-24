import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { LoginController } from "../controller/login.controller";
import { LoginService } from "../service/login.service";
import { LoginProvider } from "../provider/login.provider";
import { AuthMiddleware } from "../middleware/auth.middleware";

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
                { path: '/exam/search', method: RequestMethod.ALL }
            )
    }
}