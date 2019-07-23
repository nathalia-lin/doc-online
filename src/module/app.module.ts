import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { ExamModule } from './exam.module';
import { LoggerMiddleware } from '../middleware/logger.middleware';

@Module({
  imports: [
    ExamModule
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '/', method: RequestMethod.ALL });
  }
}
