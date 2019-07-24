import { IsNotEmpty, IsString, IsOptional, IsDate, IsUUID, IsNumber, IsBoolean } from 'class-validator';

export class CreateUserSiteDto {

    @IsNotEmpty()
    @IsUUID()
    readonly userId: number;

    @IsNotEmpty()
    @IsUUID()
    readonly siteId: number;

    @IsDate()
    readonly createdBy: string;
    
    @IsDate()
    readonly createdAt: Date;
    
}
