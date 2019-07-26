import { IsOptional, IsArray, IsNumber } from 'class-validator';

export class CreateFilterDto {

    @IsOptional()
    @IsArray()
    readonly filters: Array<String>;

    @IsOptional()
    @IsNumber()
    readonly page: number;

    @IsOptional()
    @IsNumber()
    readonly limit: number;

}

