import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

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
    @IsString()
    readonly email: string;

}
