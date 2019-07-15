import { Table, Column, Model, ForeignKey, DataType, PrimaryKey, BelongsTo } from 'sequelize-typescript';

import User from './user.model';
import Exam from './exam.model';

@Table({ tableName: 'views' })
export default class Views extends Model<Views> {

    @PrimaryKey
    @Column(DataType.UUID)
    public id: number;

    @ForeignKey(() => Exam)
    @Column(DataType.UUID)
    public examId?: number;

    @BelongsTo(() => Exam)
    public exam?: Exam;

    @ForeignKey(() => User)
    @Column(DataType.UUID)
    public userId?: number;

    @BelongsTo(() => User)
    public user?: User;

    @Column(DataType.DATE)
    public dateViewed?: Date;

    @Column(DataType.STRING(15))
    public typeViewed?: string;

}
