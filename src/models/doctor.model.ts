import { Table, Column, Model, BelongsTo, ForeignKey, PrimaryKey, HasMany, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

import Profile from './profile.model';
import Exam from './exam.model';

@Table({ tableName: 'doctor' })
export default class Doctor extends Model<Doctor> {

    @PrimaryKey
    @Column(DataType.UUID)
    public id: number;

    @ForeignKey(() => Profile)
    @Column(DataType.UUID)
    public profileId: number;

    @BelongsTo(() => Profile)
    public profile: Profile;

    @Column(DataType.STRING(10))
    public docType?: string;

    @Column(DataType.STRING(5))
    public docIssuer?: string;

    @Column(DataType.STRING(15))
    public docNum?: string;

    @HasMany(() => Exam)
    public exams?: Exam[];
    
    @CreatedAt
    @Column(DataType.DATE)
    public createdAt?: Date;
  
    @UpdatedAt
    @Column(DataType.DATE)
    public updatedAt?: Date;
    
}
