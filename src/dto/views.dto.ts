export class CreateViewsDto {
    readonly id: number;
    readonly examId: number;
    readonly userId: number;
    readonly dateViewed: Date;
    readonly typeViewed: string;
}
