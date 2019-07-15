import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { ViewsService } from "src/service/views.service";
import { ViewsController } from "src/controller/views.controller";
import { ViewsProvider } from "../provider/views.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [ViewsController],
    providers: [ViewsService, ...ViewsProvider]
})

export class ViewsModule { }
