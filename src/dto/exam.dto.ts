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

    @IsNotEmpty()
    @IsString()
    readonly modality: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsDate()
    readonly examDate: Date;

    @IsNotEmpty()
    @IsString()
    readonly statusType: string;

    @IsNotEmpty()
    @IsUUID()
    readonly patientId: number;

    @IsNotEmpty()
    @IsUUID()
    readonly requestingId: number;

    @IsOptional()
    @IsUUID()
    readonly consultingId: number;

    @IsNotEmpty()
    @IsUUID()
    readonly insuranceId: number;

    @IsNotEmpty()
    @IsDate()
    readonly lastReportView: Date;

    @IsNotEmpty()
    @IsNumber()
    readonly lastImageView: number;

}