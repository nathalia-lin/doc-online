import { Table, Column, Model, ForeignKey, CreatedAt, UpdatedAt, DataType, HasMany, BelongsTo, PrimaryKey, BelongsToMany } from 'sequelize-typescript';

import Profile from './profile.model';
import Login from './login.model';
import Site from './site.model';
import UserSite from './userSite.model';
import Views from './views.model';
import Insurance from './insurance.model';
import UserInsurance from './userInsurance.model';

@Table({ tableName: 'user' })
export default class User extends Model<User> {

  @PrimaryKey
  @Column(DataType.UUID)
  public id: number;

  @ForeignKey(() => Profile)
  @Column(DataType.UUID)
  public profileId?: number;

  @BelongsTo(() => Profile)
  public profile: Profile;

  @CreatedAt
  @Column(DataType.DATE)
  public createdAt?: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  public updatedAt?: Date;

  @Column(DataType.DATE)
  public lastAccess?: Date;

  @Column(DataType.STRING(100))
  public profiles?: string;

  @Column(DataType.BOOLEAN)
  public active?: boolean;

  @Column(DataType.STRING(120))
  public recoveryKey?: string;

  @Column(DataType.DATE)
  public lastRecovery?: Date;

  @Column(DataType.DATE)
  public termApproved?: Date;
  

  @HasMany(() => Login)
  public login?: Login[];

  @HasMany(() => Views)
  public views?: Views[];

  @BelongsToMany(() => Site, () => UserSite)
  public sites?: Site[];

  @BelongsToMany(() => Insurance, () => UserInsurance)
  public insurances?: Insurance[];

}
