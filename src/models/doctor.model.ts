import { Table, Column, Model, BelongsTo, ForeignKey, PrimaryKey, HasMany, DataType } from 'sequelize-typescript';

import Profile from './profile.model';
import Exam from './exam.model';

/**
 * Relationships:
 * - belongs to Profile
 * - has many consulted Exam
 * - has many requested Exam
 */

@Table({ tableName: 'doctor' })
export default class Doctor extends Model<Doctor> {

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

    @Column(DataType.STRING(10))
    public docType?: string;

    @Column(DataType.STRING(5))
    public docIssuer?: string;

    @Column(DataType.STRING(15))
    public docNum?: string;

    @HasMany(() => Exam)
    public requestedExams?: Exam[];

    @HasMany(() => Exam)
    public consultedExams?: Exam[];
}
