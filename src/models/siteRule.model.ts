import { Table, Column, Model, ForeignKey, BelongsTo, PrimaryKey, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

import Site from './site.model';

@Table({ tableName: 'siteRule' })
export default class SiteRule extends Model<SiteRule> {

    @PrimaryKey
    @Column(DataType.UUID)
    public id: number;

    @ForeignKey(() => Site)
    @Column(DataType.UUID)
    public siteId?: number;

    @BelongsTo(() => Site)
    public site: Site;

    @Column(DataType.STRING(100))
    public urlCheckNetwork?: string;

    @Column(DataType.STRING(200))
    public urlReportInternal?: string;

    @Column(DataType.STRING(200))
    public urlReportExternal?: string;

    @Column(DataType.STRING(15))
    public urlReportFormatOpen?: string;

    @Column(DataType.STRING(200))
    public urlWebviewerInternal?: string;

    @Column(DataType.STRING(200))
    public urlWebviewerExternal?: string;

    @Column(DataType.STRING(200))
    public urlKeyImagesInternal?: string;

    @Column(DataType.STRING(200))
    public urlKeyImagesExternal?: string;

    @Column(DataType.STRING(200))
    public urlExportImages?: string;

    @Column(DataType.INTEGER)
    public examsPerPage?: number;

    @Column(DataType.STRING(20))
    public allowReportStatus?: string;

    @Column(DataType.BOOLEAN)
    public notifyPatientEmail?: boolean;

    @Column(DataType.BOOLEAN)
    public notifyPatientSMS?: boolean;

    @CreatedAt
    @Column(DataType.DATE)
    public createdAt?: Date;

    @UpdatedAt
    @Column(DataType.DATE)
    public updatedAt?: Date;

}
