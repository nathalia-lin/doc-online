import { IsNotEmpty, IsString, IsOptional, IsUUID } from 'class-validator';

export class CreateSiteDto {

    @IsNotEmpty()
    @IsUUID()
    readonly parentId: number;

    @IsOptional()
    @IsString()
    readonly logo: string;

    @IsNotEmpty()
    @IsString()
    readonly networkId: string;

    @IsNotEmpty()
    @IsString()
    readonly cnpj: string;

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly addressId: string;

}
