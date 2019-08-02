import { IsNotEmpty, IsString, IsUUID, IsOptional } from 'class-validator';

export class CreateInsuranceDto {

    @IsNotEmpty()
    @IsString()
    readonly insuranceId: string;

    @IsNotEmpty()
    @IsUUID()
    readonly siteId: number;

    @IsOptional()
    @IsString()
    readonly name: string;

}
