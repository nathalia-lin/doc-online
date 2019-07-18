export class CreateUserSiteDto {
    readonly id?: number;
    readonly userId: number;
    readonly siteId: number;
    readonly createdBy: string;
    readonly createdAt: Date;
}
