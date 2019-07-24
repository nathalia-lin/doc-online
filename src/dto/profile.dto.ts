import { IsNotEmpty, IsString, IsOptional, IsDate } from 'class-validator';

export class CreateProfileDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly socialName: string;

    @IsNotEmpty()
    @IsString()
    readonly sex: string;

    @IsNotEmpty()
    @IsDate()
    readonly birthdate: Date;

    @IsOptional()
    @IsString()
    readonly phone: string;

    @IsOptional()
    @IsString()
    readonly email: string;

}
