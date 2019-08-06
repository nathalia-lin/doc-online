import { Controller, Get } from '@nestjs/common';

/**
 * Main page
 */

@Controller()
export class AppController {

    @Get()
    public async main() {
        console.log('Hello World');
        return 'Hello World';
    }
}
