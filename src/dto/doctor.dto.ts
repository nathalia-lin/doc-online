export class CreateDoctorDto {
    readonly id?: number;
    readonly profileId: number;
    readonly docType: string;
    readonly docIssuer: string;
    readonly docNum: string;
}

