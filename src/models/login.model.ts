import { Table, Column, Model, BelongsTo, ForeignKey, PrimaryKey, DataType } from 'sequelize-typescript';

import User from './user.model';

@Table({ tableName: 'login' })
export default class Login extends Model<Login> {

    @PrimaryKey
    @Column({
        defaultValue: DataType.UUIDV4,
        type: DataType.UUID
    }) public id: number;

    @ForeignKey(() => User)
    @Column({
        defaultValue: DataType.UUIDV4,
        type: DataType.UUID
    }) public userId: number;

    @BelongsTo(() => User)
    public user: User;

    @Column(DataType.STRING(25))
    public username?: string;

    @Column(DataType.STRING(25))
    public password?: string;

}
