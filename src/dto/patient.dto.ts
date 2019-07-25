import { IsNotEmpty, IsString, IsUUID, IsOptional } from 'class-validator';

export class CreatePatientDto {

    @IsNotEmpty()
    @IsUUID()
    readonly profileId: number;
    
    @IsNotEmpty()
    @IsString()
    readonly pid: string;
    
}
