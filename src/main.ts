import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { Logger } from '@nestjs/common';

const main = new class Main {

  public port = 3000;

  public async run() {
    await this.server();
  }

  public async server() {
    const app = await NestFactory.create(AppModule);
    await app.listen(this.port);
    Logger.log(`Server running on http://localhost:${this.port}`, 'Server');

  }
}

main.run();
