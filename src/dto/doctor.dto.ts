import { IsNotEmpty, IsString, IsUUID } from 'class-validator';


export class CreateDoctorDto {
    
    @IsNotEmpty()
    @IsUUID()
    readonly profileId: number;

    @IsNotEmpty()
    @IsString()
    readonly docType: string;

    @IsNotEmpty()
    @IsString()
    readonly docIssuer: string;

    @IsNotEmpty()
    @IsString()
    readonly docNum: string;

}

