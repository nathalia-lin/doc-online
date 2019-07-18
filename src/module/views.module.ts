import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { ViewsService } from "../service/views.service";
import { ViewsController } from "../controller/views.controller";
import { ViewsProvider } from "../provider/views.provider";

@Module({
    imports: [DatabaseModule],
    controllers: [ViewsController],
    providers: [ViewsService, ...ViewsProvider],
    exports: [ViewsService]
})

export class ViewsModule { }
