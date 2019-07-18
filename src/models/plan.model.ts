import { Table, Column, Model, ForeignKey, PrimaryKey, DataType, BelongsTo } from 'sequelize-typescript';

import Insurance from './insurance.model';

@Table({ tableName: 'plan' })
export default class Plan extends Model<Plan> {

    @PrimaryKey
    @Column({
        defaultValue: DataType.UUIDV4,
        type: DataType.UUID
    }) public id: number;

    @ForeignKey(() => Insurance)
    @Column(DataType.UUID)
    public insuranceId?: number;

    @BelongsTo(() => Insurance)
    public insurance?: Insurance;

    @Column(DataType.STRING(200))
    public name?: string;

}