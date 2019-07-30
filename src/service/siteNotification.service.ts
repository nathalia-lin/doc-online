import { Injectable } from '@nestjs/common';

import { CreateSiteNotificationDto } from '../dto/siteNotification.dto';
import Site from '../models/site.model';
import SiteNotification from '../models/siteNotification.model';

@Injectable()
export class SiteNotificationService {

  async create(createSiteNotificationDto: CreateSiteNotificationDto): Promise<SiteNotification> {
    return await SiteNotification.create<SiteNotification>(createSiteNotificationDto);
  }

  async find(where: any) {
    const siteNotifications = await SiteNotification.findAll({
      where: where, include: [Site]
    });
    return siteNotifications;
  }

  async findOne(where: any) {
    if (typeof where === 'string') {
      where = { 'id': where }
    }
    const siteNotification = await SiteNotification.findOne({
      where: where, include: [Site]
    });
    return siteNotification;
  }

  async updateOne(id: number, body: any) {
    return await SiteNotification.update(body, { where: { 'id': id } });
  }

  async deleteOne(siteNotificationId: number) {
    const deletedSiteNotification = await SiteNotification.destroy({
      where: { 'id': siteNotificationId }
    });
    return await deletedSiteNotification;
  }
}
