import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SiteRuleService } from 'src/service/siteRule.service';

@Controller('siterule')
export class SiteRuleController {
    constructor(private readonly siteRuleService: SiteRuleService) { }

    @Post()
    create(
        @Body('siteId') siteId: number,
        @Body('urlCheckNetwork') urlCheckNetwork: string,
        @Body('urlReportInternal') urlReportInternal: string,
        @Body('urlReportExternal') urlReportExternal: string,
        @Body('urlReportFormatOpen') urlReportFormatOpen: string,
        @Body('urlWebviewerInternal') urlWebviewerInternal: string,
        @Body('urlWebviewerExternal') urlWebviewerExternal: string,
        @Body('urlKeyImagesInternal') urlKeyImagesInternal: string,
        @Body('urlKeyImagesExternal') urlKeyImagesExternal: string,
        @Body('urlExportImages') urlExportImages: string,
        @Body('examsPerPage') examsPerPage: number,
        @Body('allowReportStatus') allowReportStatus: string,
        @Body('notifyPatientEmail') notifyPatientEmail: boolean,
        @Body('notifyPatientSMS') notifyPatientSMS: boolean
    ) {
        return this.siteRuleService.create(
            siteId,
            urlCheckNetwork,
            urlReportInternal,
            urlReportExternal,
            urlReportFormatOpen,
            urlWebviewerInternal,
            urlWebviewerExternal,
            urlKeyImagesInternal,
            urlKeyImagesExternal,
            urlExportImages,
            examsPerPage,
            allowReportStatus,
            notifyPatientEmail,
            notifyPatientSMS
        );
    }

    @Get()
    showAll() {
        return this.siteRuleService.findAll();
    }

    @Get(':id')
    showOne(@Param('id') siteRuleId: number) {
        return this.siteRuleService.findOne(siteRuleId);
    }

    @Delete(':id')
    deleteOne(@Param('id') siteRuleId: number) {
        return this.siteRuleService.deleteOne(siteRuleId);
    }
}
