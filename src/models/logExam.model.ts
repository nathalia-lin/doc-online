import { Table, Column, Model, ForeignKey, DataType, PrimaryKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';

import Exam from './exam.model';

@Table({ tableName: 'logExam' })
export default class LogExam extends Model<LogExam> {

    @PrimaryKey
    @Column(DataType.UUID)
    public id: number;

    @ForeignKey(() => Exam)
    @Column(DataType.UUID)
    public examId?: number;

    @BelongsTo(() => Exam)
    public exam?: Exam;

    @Column(DataType.DATE)
    public datePosted?: Date;

    @Column(DataType.TEXT)
    public postedData?: string;

    @CreatedAt
    @Column(DataType.DATE)
    public createdAt?: Date;
  
    @UpdatedAt
    @Column(DataType.DATE)
    public updatedAt?: Date;
}
