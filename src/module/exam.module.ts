import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { ExamController } from "../controller/exam.controller";
import { ExamService } from "../service/exam.service";
import { ExamProvider } from "../provider/exam.provider";

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
import { SiteProvider } from "../provider/site.provider";

@Module({
    imports: [
        DatabaseModule,
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
    controllers: [ExamController],
    providers: [ExamService, ...ExamProvider, ...SiteProvider]
})

export class ExamModule { }
