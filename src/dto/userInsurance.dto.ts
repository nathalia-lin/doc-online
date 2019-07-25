import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateUserInsuranceDto {

    @IsNotEmpty()
    @IsUUID()
    readonly insuranceId: number;

    @IsNotEmpty()
    @IsUUID()
    readonly userId: number;
    
}
