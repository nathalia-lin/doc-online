import { Table, Column, Model, BelongsTo, ForeignKey, PrimaryKey, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

import User from './user.model';

@Table({ tableName: 'login' })
export default class Login extends Model<Login> {

    @PrimaryKey
    @Column(DataType.UUID)
    public id: number;

    @ForeignKey(() => User)
    @Column(DataType.UUID)
    public userId: number;

    @BelongsTo(() => User)
    public user: User;

    @Column(DataType.STRING(25))
    public username?: string;

    @Column(DataType.STRING(25))
    public password?: string;

    @CreatedAt
    @Column(DataType.DATE)
    public createdAt?: Date;
  
    @UpdatedAt
    @Column(DataType.DATE)
    public updatedAt?: Date;
  

}
