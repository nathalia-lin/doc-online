import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { UserProvider } from '../provider/user.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserService, ...UserProvider]
})

export class UserModule { }
