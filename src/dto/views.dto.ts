import { IsNotEmpty, IsString, IsDate, IsUUID, IsOptional } from 'class-validator';

export class CreateViewsDto {

    @IsNotEmpty()
    @IsUUID()
    readonly examId: number;

    @IsNotEmpty()
    @IsUUID()
    readonly userId: number;

    @IsNotEmpty()
    @IsDate()
    readonly dateViewed: Date;

    @IsOptional()
    @IsString()
    readonly typeViewed: string;
}
