import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateInsuranceDto {

    @IsNotEmpty()
    @IsUUID()
    readonly siteId: number;

    @IsNotEmpty()
    @IsString()
    readonly name: string;

}
