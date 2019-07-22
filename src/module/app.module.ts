import { Module } from '@nestjs/common';

import { ExamModule } from './exam.module';

@Module({
  imports: [
    ExamModule
  ],
})

export class AppModule { }
