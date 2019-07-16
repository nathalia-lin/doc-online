import { Table, Column, Model, ForeignKey, CreatedAt, DataType, PrimaryKey } from 'sequelize-typescript';

import Site from './site.model';
import User from './user.model';

@Table({ tableName: 'userSite' })
export default class UserSite extends Model<UserSite> {

  @PrimaryKey
  @Column({
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID
  }) public id: number;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  public userId?: number;

  @ForeignKey(() => Site)
  @Column(DataType.UUID)
  public siteId?: number;

  @Column(DataType.STRING(25))
  public createdBy?: string;

  @CreatedAt
  @Column(DataType.DATE)
  public createdAt?: Date;

}
