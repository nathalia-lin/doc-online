import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import Site from 'src/models/site.model';
import SiteNotification from 'src/models/siteNotification.model';

@Injectable()
export class SiteNotificationService {
  constructor(
    @Inject('SiteNotificationRepository') private readonly siteNotificationRepository: typeof SiteNotification
  ) { }

  async create(
    siteId: number,
    type: string,
    smtpHostname: string,
    smtpPort: string,
    smptUsername: string,
    smptPassword: string,
    smptSsl: boolean,
    smsHostname: string,
    smsPort: number,
    smsUsername: string,
    smsPassword: string
  ) {
    const id: string = uuid();

    const newSiteNotification = await this.siteNotificationRepository.create({
      id,
      siteId,
      type,
      smtpHostname,
      smtpPort,
      smptUsername,
      smptPassword,
      smptSsl,
      smsHostname,
      smsPort,
      smsUsername,
      smsPassword
    });

    return newSiteNotification;
  }

  async findAll() {
    return await this.siteNotificationRepository.findAll<SiteNotification>();
  }

  async findOne(siteNotificationId: number) {
    const siteNotification = await this.siteNotificationRepository.findOne({
      where: { 'id': siteNotificationId }, include: [Site]
    });
    return siteNotification;
  }

  async deleteOne(siteNotificationId: number) {

    const deletedSiteNotification = await this.siteNotificationRepository.destroy({
      where: { 'id': siteNotificationId }
    });

    return await deletedSiteNotification;
  }
}
