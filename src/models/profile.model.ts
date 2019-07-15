import { Table, Column, Model, PrimaryKey, HasOne, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

import User from './user.model';
import Patient from './patient.model';
import Doctor from './doctor.model';

@Table({ tableName: 'profile' })
export default class Profile extends Model<Profile> {

  @PrimaryKey
  @Column(DataType.UUID)
  public id: number;

  @Column(DataType.STRING(30))
  public firstName?: string;

  @Column(DataType.STRING(150))
  public lastName?: string;

  @Column(DataType.STRING(1))
  public sex?: string;

  @Column(DataType.DATE)
  public birthdate?: Date;

  @Column(DataType.STRING(12))
  public phone?: string;

  @Column(DataType.STRING(50))
  public email?: string;

  @CreatedAt
  @Column(DataType.DATE)
  public createdAt?: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  public updatedAt?: Date;

  @HasOne(() => User)
  public user: User;

  @HasOne(() => Patient)
  public patient: Patient;

  @HasOne(() => Doctor)
  public doctor: Doctor;
}

