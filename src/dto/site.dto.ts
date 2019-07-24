import { IsNotEmpty, IsString, IsOptional, IsDate, IsUUID } from 'class-validator';

export class CreateSiteDto {

    @IsNotEmpty()
    @IsUUID()
    readonly parentId: number;

    @IsDate()
    readonly createdAt: Date;

    @IsDate()
    readonly updatedAt: Date;

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
