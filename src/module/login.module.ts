import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { LoginController } from "../controller/login.controller";
import { LoginService } from "../service/login.service";
import { AuthMiddleware } from "../shared/middlewares/auth.middleware";
import { LoginProvider } from "../provider/login.provider";

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
                // Se limpar o banco, comment out /user 
                // { path: '/user', method: RequestMethod.ALL },
            )
    }
}