import { IsNotEmpty, IsString, IsOptional, IsEmail } from 'class-validator';

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
    @IsString()
    readonly birthdate: string;

    @IsOptional()
    @IsString()
    readonly phone: string;

    @IsOptional()
    @IsEmail()
    readonly email: string;

}
