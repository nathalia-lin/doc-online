import { Table, Column, Model, BelongsTo, ForeignKey, PrimaryKey, DataType, BeforeCreate } from 'sequelize-typescript';
import crypto from 'crypto';

import User from './user.model';

/**
 * Relationships:
 * - belongs to User
 */

@Table({ tableName: 'login' })
export default class Login extends Model<Login> {

    @PrimaryKey
    @Column({
        defaultValue: DataType.UUIDV4,
        type: DataType.UUID
    }) public id: number;

    @ForeignKey(() => User)
    @Column(DataType.UUID) 
    public userId: number;

    @BelongsTo(() => User)
    public user: User;

    @Column(DataType.STRING(25))
    public username?: string;

    @Column(DataType.STRING(150))
    public password?: string;

    @BeforeCreate
    public static async hashPassword(login: Login) {
        login.passwordHash = crypto.createHmac('sha256', login.password).digest('hex');
    }

    @Column(DataType.STRING(150))
    public passwordHash?: string;

}
