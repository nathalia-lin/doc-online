import { Table, Column, Model, ForeignKey, PrimaryKey, CreatedAt, UpdatedAt, DataType, HasOne, HasMany, BelongsTo } from 'sequelize-typescript';

import Site from './site.model';
import Patient from './patient.model';
import Doctor from './doctor.model';
import Insurance from './insurance.model';
import LogExam from './logExam.model';
import Views from './views.model';

@Table({ tableName: 'exam' })
export default class Exam extends Model<Exam> {

    @PrimaryKey
    @Column(DataType.UUID)
    public id: number;

    @Column(DataType.STRING(15))
    public pid?: string;

    @Column(DataType.STRING(50))
    public accessionNum?: string;

    @Column(DataType.STRING(150))
    public studyInstanceUID?: string;

    @Column(DataType.STRING(25))
    public networkId?: string;

    @ForeignKey(() => Site)
    @Column(DataType.UUID)
    public siteId?: number;

    @BelongsTo(() => Site)
    public site?: Site

    @Column(DataType.STRING(5))
    public modality?: string;

    @Column(DataType.STRING(150))
    public description?: string;

    @Column(DataType.DATE)
    public examDate?: Date;

    @Column(DataType.STRING(25))
    public statusType?: string;

    @ForeignKey(() => Patient)
    @Column(DataType.UUID)
    public patientId?: number;

    @BelongsTo(() => Patient)
    public patient?: Patient;

    @ForeignKey(() => Doctor)
    @Column(DataType.UUID)
    public requestingId?: number;

    @BelongsTo(() => Doctor)
    public requestingDoctor?: Doctor;

    @ForeignKey(() => Doctor)
    @Column(DataType.UUID)
    public consultingId?: number;

    @BelongsTo(() => Doctor)
    public consultingingDoctor?: Doctor;

    @ForeignKey(() => Insurance)
    @Column(DataType.UUID)
    public insuranceId?: number;

    @BelongsTo(() => Insurance)
    public insurance?: Insurance;

    @Column(DataType.DATE)
    public lastReportView?: Date;

    @Column(DataType.UUID)
    public lastImageView?: number;

    @CreatedAt
    @Column(DataType.DATE)
    public createdAt?: Date;
  
    @UpdatedAt
    @Column(DataType.DATE)
    public updatedAt?: Date;

    @HasOne(() => LogExam)
    public logExam?: LogExam

    @HasMany(() => Views)
    public views?: Views[]
}
