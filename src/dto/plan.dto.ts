import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreatePlanDto {

    @IsNotEmpty()
    @IsString()
    readonly planId: number;

    @IsNotEmpty()
    @IsUUID()
    readonly insuranceId: number;

    @IsNotEmpty()
    @IsString()
    readonly name: string;

}