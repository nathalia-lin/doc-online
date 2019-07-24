import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';


export class CreateDoctorDto {
    
    @IsNotEmpty()
    @IsUUID()
    readonly profileId: number;

    @IsOptional()
    @IsString()
    readonly docType: string;

    @IsOptional()
    @IsString()
    readonly docIssuer: string;

    @IsOptional()
    @IsString()
    readonly docNum: string;

}

