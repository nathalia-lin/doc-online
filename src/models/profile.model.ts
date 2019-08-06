import { Table, Column, Model, PrimaryKey, HasOne, DataType } from 'sequelize-typescript';

import User from './user.model';
import Patient from './patient.model';
import Doctor from './doctor.model';

/**
 * Relationships:
 * - has one User
 * - has one Patient
 * - has one Doctor
*/

@Table({ tableName: 'profile' })
export default class Profile extends Model<Profile> {

  @PrimaryKey
  @Column({
    defaultValue: DataType.UUIDV4,
    type: DataType.UUID
  }) public id: number;

  @Column(DataType.STRING(30))
  public name?: string;

  @Column(DataType.STRING(150))
  public socialName?: string;

  @Column(DataType.STRING(1))
  public sex?: string;

  @Column(DataType.STRING(20))
  public birthdate?: string;

  @Column(DataType.STRING(12))
  public phone?: string;

  @Column(DataType.STRING(50))
  public email?: string;

  @HasOne(() => User)
  public user: User;

  @HasOne(() => Patient)
  public patient: Patient;

  @HasOne(() => Doctor)
  public doctor: Doctor;

}

