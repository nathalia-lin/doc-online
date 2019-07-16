export class CreateSiteDto {
    readonly id: number;
    readonly parentId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly logo: string;
    readonly networkId: string;
    readonly cnpj: string;
    readonly name: string;
    readonly addressId: string;
}
