export class CreateExamDto {
    readonly id?: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly pid: string;
    readonly accessionNum: string;
    readonly studyInstanceUID: string;
    readonly networkId: string;
    readonly siteId: number;
    readonly modality: string;
    readonly description: string;
    readonly examDate: Date;
    readonly statusType: string;
    readonly patientId: number;
    readonly requestingId: number;
    readonly consultingId: number;
    readonly insuranceId: number;
    readonly lastReportView: Date;
    readonly lastImageView: number;
}