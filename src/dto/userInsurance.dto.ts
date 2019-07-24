import { IsNotEmpty, IsString, IsOptional, IsDate, IsUUID, IsNumber, IsBoolean } from 'class-validator';

export class CreateUserInsuranceDto {

    @IsNotEmpty()
    @IsUUID()
    readonly insuranceId: number;

    @IsNotEmpty()
    @IsUUID()
    readonly userId: number;
}
