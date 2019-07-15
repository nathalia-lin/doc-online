import { Table, Column, Model, ForeignKey, BelongsTo, PrimaryKey, DataType } from 'sequelize-typescript';

import Site from './site.model';

@Table({ tableName: 'siteNotification' })
export default class SiteNotification extends Model<SiteNotification> {

  @PrimaryKey
  @Column(DataType.UUID)
  public id: number;

  @ForeignKey(() => Site)
  @Column(DataType.UUID)
  public siteId?: number;

  @BelongsTo(() => Site)
  public site: Site;

  @Column(DataType.STRING(15))
  public type?: string;

  @Column(DataType.STRING(100))
  public smtpHostname?: string;

  @Column(DataType.INTEGER)
  public smtpPort?: number;

  @Column(DataType.STRING(25))
  public smptUsername?: string;

  @Column(DataType.STRING(120))
  public smptPassword?: string;

  @Column(DataType.BOOLEAN)
  public smptSsl?: boolean;

  @Column(DataType.STRING(100))
  public smsHostname?: string;

  @Column(DataType.INTEGER)
  public smsPort?: number;

  @Column(DataType.STRING(25))
  public smsUsername?: string;

  @Column(DataType.STRING(120))
  public smsPassword?: string;

}
