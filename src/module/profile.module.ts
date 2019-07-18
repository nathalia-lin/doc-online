import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { ProfileController } from "../controller/profile.controllers";
import { ProfileService } from "../service/profile.service";
import { ProfileProvider } from "../provider/profile.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [ProfileController],
    providers: [ProfileService, ...ProfileProvider],
    exports: [ProfileService]
})

export class ProfileModule { }
