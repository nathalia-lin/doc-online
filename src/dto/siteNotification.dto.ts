export class CreateSiteNotificationDto {
    readonly id: number;
    readonly siteId: number;
    readonly type: string;
    readonly smtpHostname: string;
    readonly smtpPort: number;
    readonly smptUsername: string;
    readonly smptPassword: string;
    readonly smptSsl: boolean;
    readonly smsHostname: string;
    readonly smsPort: number;
    readonly smsUsername: string;
    readonly smsPassword: string;
}
