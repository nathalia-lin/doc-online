import { IsNotEmpty, IsString, IsUUID, IsNumber, IsBoolean } from 'class-validator';

export class CreateSiteRuleDto {

    @IsNotEmpty()
    @IsUUID()
    readonly siteId: number;

    @IsNotEmpty()
    @IsString()
    readonly urlCheckNetwork: string;

    @IsNotEmpty()
    @IsString()
    readonly urlReportInternal: string;

    @IsNotEmpty()
    @IsString()
    readonly urlReportExternal: string;

    @IsNotEmpty()
    @IsString()
    readonly urlReportFormatOpen: string;

    @IsNotEmpty()
    @IsString()
    readonly urlWebviewerInternal: string;

    @IsNotEmpty()
    @IsString()
    readonly urlWebviewerExternal: string;

    @IsNotEmpty()
    @IsString()
    readonly urlKeyImagesInternal: string;

    @IsNotEmpty()
    @IsString()
    readonly urlKeyImagesExternal: string;

    @IsNotEmpty()
    @IsString()
    readonly urlExportImages: string;

    @IsNotEmpty()
    @IsNumber()
    readonly examsPerPage: number;

    @IsNotEmpty()
    @IsString()
    readonly allowReportStatus: string;

    @IsNotEmpty()
    @IsBoolean()
    readonly notifyPatientEmail: boolean;

    @IsNotEmpty()
    @IsBoolean()
    readonly notifyPatientSMS: boolean;
}
