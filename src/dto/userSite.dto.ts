import { IsNotEmpty, IsDate, IsUUID } from 'class-validator';

export class CreateUserSiteDto {

    @IsNotEmpty()
    @IsUUID()
    readonly userId: number;

    @IsNotEmpty()
    @IsUUID()
    readonly siteId: number;

    @IsNotEmpty()
    @IsDate()
    readonly createdBy: string;
    
}
