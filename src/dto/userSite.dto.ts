import { IsNotEmpty, IsString, IsOptional, IsDate, IsUUID, IsNumber, IsBoolean } from 'class-validator';

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
