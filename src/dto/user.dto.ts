import { IsNotEmpty, IsString, IsOptional, IsDate, IsUUID, IsNumber, IsBoolean } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    @IsUUID()
    readonly profileId: number;

    @IsDate()
    readonly createdAt: Date;

    @IsDate()
    readonly updatedAt: Date;

    @IsDate()
    readonly lastAccess: Date;

    @IsNotEmpty()
    @IsString()
    readonly profiles: string;

    @IsNotEmpty()
    @IsBoolean()
    readonly active: boolean;

    @IsNotEmpty()
    @IsString()
    readonly recoveryKey: string;

    @IsDate()
    readonly lastRecovery: Date;

    @IsDate()
    readonly termApproved: Date;

}
