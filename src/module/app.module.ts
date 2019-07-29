import { Module, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

import { ExamModule } from './exam.module';
import { HttpErrorFilter } from '../shared/filters/http-exception.filter';
import { LoggerInterceptor } from '../shared/interceptors/logger.interceptor';

@Module({
  imports: [
    ExamModule
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    }
  ]
})

export class AppModule { }
