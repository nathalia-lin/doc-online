import { Module } from '@nestjs/common';

import { SiteModule } from './site.module';
import { SiteRuleModule } from './siteRule.module';
import { SiteNotificationModule } from './siteNotification.module';
import { ProfileModule } from './profile.module';
import { UserModule } from './user.module';
import { LoginModule } from './login.module';
import { PatientModule } from './patient.module';
import { DoctorModule } from './doctor.module';
import { UserSiteModule } from './userSite.module';
import { ViewsModule } from './views.module';
import { LogExamModule } from './logExam.module';
import { InsuranceModule } from './insurance.module';
import { PlanModule } from './plan.module';
import { UserInsuranceModule } from './userInsurance.module';
import { ExamModule } from './exam.module';

@Module({
  imports: [
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
    PlanModule,
    UserInsuranceModule,
    ExamModule
  ],
})

export class AppModule {}
