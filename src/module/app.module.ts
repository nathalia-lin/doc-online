import { Module, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

import { ExamModule } from './exam.module';
import { HttpErrorFilter } from '../shared/filters/http-exception.filter';
import { LoggerInterceptor } from '../shared/interceptors/logger.interceptor';

import { SiteModule } from "./site.module";
import { SiteRuleModule } from "./siteRule.module";
import { SiteNotificationModule } from "./siteNotification.module";
import { ProfileModule } from "./profile.module";
import { UserModule } from "./user.module";
import { LoginModule } from "./login.module";
import { PatientModule } from "./patient.module";
import { DoctorModule } from "./doctor.module";
import { UserSiteModule } from "./userSite.module";
import { ViewsModule } from "./views.module";
import { LogExamModule } from "./logExam.module";
import { InsuranceModule } from "./insurance.module";
import { UserInsuranceModule } from "./userInsurance.module";
import { PlanModule } from "./plan.module";

@Module({
  imports: [
    ExamModule,
    SiteModule,
    SiteRuleModule,
    SiteNotificationModule,
    ProfileModule,
    UserModule,
    LoginModule,
    PatientModule,
    DoctorModule,
    UserSiteModule,
    ViewsModule,
    LogExamModule,
    InsuranceModule,
    UserInsuranceModule,
    PlanModule
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
