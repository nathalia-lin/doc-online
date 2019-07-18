export class CreateProfileDto {
    readonly id?: number;
    readonly name: string;
    readonly socialName: string;
    readonly sex: string;
    readonly birthdate: Date;
    readonly phone: string;
    readonly email: string;
}
