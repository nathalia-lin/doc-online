import { Table, Column, Model, CreatedAt, UpdatedAt, DataType, PrimaryKey, BelongsToMany, HasOne, HasMany } from 'sequelize-typescript';

import SiteRule from './siteRule.model';
import SiteNotification from './siteNotification.model';
import User from './user.model';
import UserSite from './userSite.model';
import Insurance from './insurance.model';
import Exam from './exam.model';

/**
 * Relationships:
 * - belongs to many User
 * - belongs to many UserSite
 * - has one SiteRule
 * - has many Insurance
 * - has many Exam
*/

@Table({ tableName: 'site' })
export default class Site extends Model<Site> {

  @PrimaryKey
  @Column({
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID
  }) public id?: number;

  @Column(DataType.UUID)
  public parentId?: number;

  @CreatedAt
  @Column(DataType.DATE)
  public createdAt?: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  public updatedAt?: Date;

  @Column(DataType.STRING(100))
  public logo?: string;

  @Column(DataType.STRING(20))
  public networkId?: string;

  @Column(DataType.STRING(14))
  public cnpj?: string;

  @Column(DataType.STRING(40))
  public name?: string;

  @Column(DataType.UUID)
  public addressId?: string;


  @HasOne(() => SiteRule)
  public siteRule?: SiteRule;

  @HasOne(() => SiteNotification)
  public siteNotification?: SiteNotification;

  @BelongsToMany(() => User, () => UserSite)
  public users?: User[];

  @HasMany(() => Insurance)
  public insurances?: Insurance[];

  @HasMany(() => Exam)
  public exams?: Exam[];
}
