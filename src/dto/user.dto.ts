export class CreateUserDto {
    readonly id?: number;
    readonly profileId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly lastAccess: Date;
    readonly profiles: string;
    readonly active: boolean;
    readonly recoveryKey: string;
    readonly lastRecovery: Date;
    readonly termApproved: Date;
}
