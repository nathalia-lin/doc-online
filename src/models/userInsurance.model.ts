import { Table, Column, Model, ForeignKey, PrimaryKey, DataType } from 'sequelize-typescript';

import User from './user.model';
import Insurance from './insurance.model';

/**
 * Relationships:
 * - has one Insurance
 * - has one User
*/

@Table({ tableName: 'userInsurance' })
export default class UserInsurance extends Model<UserInsurance> {

    @PrimaryKey
    @Column({
        defaultValue: DataType.UUIDV4,
        type: DataType.UUID
    }) public id: number;

    @ForeignKey(() => Insurance)
    @Column(DataType.UUID)
    public insuranceId?: number;

    @ForeignKey(() => User)
    @Column(DataType.UUID)
    public userId?: number;

}