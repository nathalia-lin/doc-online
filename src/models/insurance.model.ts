import { Table, Column, Model, ForeignKey, PrimaryKey, BelongsToMany, DataType, BelongsTo, HasMany } from 'sequelize-typescript';

import Site from './site.model';
import User from './user.model';
import UserInsurance from './userInsurance.model';
import Exam from './exam.model';
import Plan from './plan.model';

/**
 * Relationships:
 * - belongs to Site
 * - belongs to many User, UserInsurance
 * - has many Exam
 * - has many Plan
 */

@Table({ tableName: 'insurance' })
export default class Insurance extends Model<Insurance> {

    @PrimaryKey
    @Column({
        defaultValue: DataType.UUIDV4,
        type: DataType.UUID
    }) public id: number;

    @ForeignKey(() => Site)
    @Column(DataType.UUID)
    public siteId?: number;

    @BelongsTo(() => Site)
    public site?: Site;

    @Column(DataType.STRING(100))
    public insuranceId: string;

    @Column(DataType.STRING(200))
    public name?: string;

    @BelongsToMany(() => User, () => UserInsurance)
    public users: User[];

    @HasMany(() => Exam)
    public exams?: Exam[];

    @HasMany(() => Plan)
    public plans?: Plan[];

}