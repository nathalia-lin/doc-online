import { IsNotEmpty, IsString, IsUUID, IsNumber, IsBoolean } from 'class-validator';

export class CreateSiteNotificationDto {

    @IsNotEmpty()
    @IsUUID()
    readonly siteId: number;

    @IsNotEmpty()
    @IsString()
    readonly type: string;

    @IsNotEmpty()
    @IsString()
    readonly smtpHostname: string;

    @IsNotEmpty()
    @IsNumber()
    readonly smtpPort: number;

    @IsNotEmpty()
    @IsString()
    readonly smptUsername: string;

    @IsNotEmpty()
    @IsString()
    readonly smptPassword: string;

    @IsNotEmpty()
    @IsBoolean()
    readonly smptSsl: boolean;

    @IsNotEmpty()
    @IsString()
    readonly smsHostname: string;
   
    @IsNotEmpty()
    @IsNumber()
    readonly smsPort: number;

    @IsNotEmpty()
    @IsString()
    readonly smsUsername: string;

    @IsNotEmpty()
    @IsString()
    readonly smsPassword: string;

}
