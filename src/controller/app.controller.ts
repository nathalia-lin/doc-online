import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {

    @Get()
    public async main() {
        console.log('Hello World');
    }
}
