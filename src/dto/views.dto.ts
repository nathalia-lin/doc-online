import { IsNotEmpty, IsString, IsDate, IsUUID } from 'class-validator';

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

    @IsNotEmpty()
    @IsString()
    readonly typeViewed: string;
}
