import { Table, Column, Model, BelongsTo, ForeignKey, PrimaryKey, HasMany, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

import Profile from './profile.model';
import Exam from './exam.model';

@Table({ tableName: 'patient' })
export default class Patient extends Model<Patient> {

    @PrimaryKey
    @Column(DataType.UUID)
    public id: number;

    @ForeignKey(() => Profile)
    @Column(DataType.UUID)
    public profileId: number;

    @BelongsTo(() => Profile)
    public profile: Profile;

    @HasMany(() => Exam)
    public exams?: Exam[];

    @Column(DataType.STRING(15))
    public pid?: string;

    @CreatedAt
    @Column(DataType.DATE)
    public createdAt?: Date;
  
    @UpdatedAt
    @Column(DataType.DATE)
    public updatedAt?: Date;
}
