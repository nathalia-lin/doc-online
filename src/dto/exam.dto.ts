import { IsNotEmpty, IsString, IsOptional, IsDate, IsUUID, IsNumber } from 'class-validator';

export class CreateExamDto {
    
    @IsNotEmpty()
    @IsUUID()
    readonly id: number;

    @IsNotEmpty()
    @IsString()
    readonly pid: string;

    @IsNotEmpty()
    @IsString()
    readonly accessionNum: string;

    @IsNotEmpty()
    @IsString()
    readonly studyInstanceUID: string;

    @IsNotEmpty()
    @IsString()
    readonly networkId: string;

    @IsNotEmpty()
    @IsUUID()
    readonly siteId: number;

    @IsOptional()
    @IsString()
    readonly modality: string;

    @IsOptional()
    @IsString()
    readonly description: string;

    @IsOptional()
    @IsDate()
    readonly examDate: Date;

    @IsOptional()
    @IsString()
    readonly statusType: string;

    @IsOptional()
    @IsUUID()
    readonly patientId: number;

    @IsOptional()
    @IsUUID()
    readonly requestingId: number;

    @IsOptional()
    @IsUUID()
    readonly consultingId: number;

    @IsOptional()
    @IsUUID()
    readonly insuranceId: number;

    @IsOptional()
    @IsDate()
    readonly lastReportView: Date;

    @IsOptional()
    @IsNumber()
    readonly lastImageView: number;

}