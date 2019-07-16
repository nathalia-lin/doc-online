export class CreateProfileDto {
    readonly id: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly sex: string;
    readonly birthdate: Date;
    readonly phone: string;
    readonly email: string;
}
