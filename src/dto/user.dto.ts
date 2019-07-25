import { IsNotEmpty, IsString, IsOptional, IsDate, IsUUID, IsBoolean } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    @IsUUID()
    readonly profileId: number;

    @IsOptional()
    @IsDate()
    readonly lastAccess: Date;

    @IsNotEmpty()
    @IsString()
    readonly profiles: string;

    @IsNotEmpty()
    @IsBoolean()
    readonly active: boolean;

    @IsOptional()
    @IsString()
    readonly recoveryKey: string;

    @IsOptional()
    @IsDate()
    readonly lastRecovery: Date;

    @IsOptional()
    @IsDate()
    readonly termApproved: Date;

}
