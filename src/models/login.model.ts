import { Table, Column, Model, BelongsTo, ForeignKey, PrimaryKey, DataType, BeforeCreate } from 'sequelize-typescript';
import crypto from 'crypto';

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

    @BeforeCreate
    public static async hashPassword(login: Login) {
        login.password = crypto.createHmac('sha256', login.password).digest('hex');
    }

    @Column(DataType.STRING(150))
    public password?: string;

}
