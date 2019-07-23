import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { ViewsService } from "../service/views.service";
import { ViewsController } from "../controller/views.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [ViewsController],
    providers: [ViewsService],
    exports: [ViewsService]
})

export class ViewsModule { }
