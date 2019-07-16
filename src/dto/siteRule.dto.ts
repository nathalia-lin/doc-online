export class CreateSiteRuleDto {
    readonly id: number;
    readonly siteId: number;
    readonly urlCheckNetwork: string;
    readonly urlReportInternal: string;
    readonly urlReportExternal: string;
    readonly urlReportFormatOpen: string;
    readonly urlWebviewerInternal: string;
    readonly urlWebviewerExternal: string;
    readonly urlKeyImagesInternal: string;
    readonly urlKeyImagesExternal: string;
    readonly urlExportImages: string;
    readonly examsPerPage: number;
    readonly allowReportStatus: string;
    readonly notifyPatientEmail: boolean;
    readonly notifyPatientSMS: boolean;
}
