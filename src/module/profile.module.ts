import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { ProfileController } from "src/controller/profile.controllers";
import { ProfileService } from "src/service/profile.service";
import { ProfileProvider } from "../provider/profile.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [ProfileController],
    providers: [ProfileService, ...ProfileProvider]
})

export class ProfileModule { }
