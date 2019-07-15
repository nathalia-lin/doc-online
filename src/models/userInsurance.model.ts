import { Table, Column, Model, ForeignKey, PrimaryKey, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

import User from './user.model';
import Insurance from './insurance.model';

@Table({ tableName: 'userInsurance' })
export default class UserInsurance extends Model<UserInsurance> {

    @PrimaryKey
    @Column(DataType.UUID)
    public id: number;

    @ForeignKey(() => Insurance)
    @Column(DataType.UUID)
    public insuranceId?: number;

    @ForeignKey(() => User)
    @Column(DataType.UUID)
    public userId?: number;

    @CreatedAt
    @Column(DataType.DATE)
    public createdAt?: Date;

    @UpdatedAt
    @Column(DataType.DATE)
    public updatedAt?: Date;
}