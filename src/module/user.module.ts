import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})

export class UserModule { }
