import { Table, Column, Model, BelongsTo, ForeignKey, PrimaryKey, HasMany, DataType } from 'sequelize-typescript';

import Profile from './profile.model';
import Exam from './exam.model';

/**
 * Relationships:
 * - belongs to Profile
 * - has many Exam
 */

@Table({ tableName: 'patient' })
export default class Patient extends Model<Patient> {

    @PrimaryKey
    @Column({
        defaultValue: DataType.UUIDV4,
        type: DataType.UUID
    }) public id: number;

    @ForeignKey(() => Profile)
    @Column(DataType.UUID) 
    public profileId: number;

    @BelongsTo(() => Profile)
    public profile: Profile;

    @HasMany(() => Exam)
    public exams?: Exam[];

    @Column(DataType.STRING(15))
    public pid?: string;

}
