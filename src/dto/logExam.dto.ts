import { IsNotEmpty, IsString, IsUUID, IsOptional } from 'class-validator';

export class CreateLogExamDto {

    @IsNotEmpty()
    @IsUUID()
    readonly examId: number;

    @IsOptional()
    @IsString()
    readonly postedData: string;

}
