import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { ProfileController } from "../controller/profile.controllers";
import { ProfileService } from "../service/profile.service";

@Module({
    imports: [DatabaseModule],
    controllers: [ProfileController],
    providers: [ProfileService],
    exports: [ProfileService]
})

export class ProfileModule { }
