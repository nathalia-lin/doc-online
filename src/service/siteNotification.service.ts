import { Injectable, Inject } from '@nestjs/common';

import { CreateSiteNotificationDto } from '../dto/siteNotification.dto';
import Site from '../models/site.model';
import SiteNotification from '../models/siteNotification.model';

@Injectable()
export class SiteNotificationService {

  constructor(
    @Inject('SiteNotificationRepository') private readonly siteNotificationRepository: typeof SiteNotification
  ) { }
  
  async create(createSiteNotificationDto: CreateSiteNotificationDto): Promise<SiteNotification> {
    return await this.siteNotificationRepository.create<SiteNotification>(createSiteNotificationDto);
  }

  async find(where: any) {
    const siteNotifications = await this.siteNotificationRepository.findAll({
      where: where, include: [Site]
    });
    return siteNotifications;
  }

  async findOne(where: any) {
    if (typeof where === 'string') {
      where = { 'id': where }
    }
    const siteNotification = await this.siteNotificationRepository.findOne({
      where: where, include: [Site]
    });
    return siteNotification;
  }

  async updateOne(id: number, body: any) {
    return await this.siteNotificationRepository.update(body, { where: { 'id': id } });
  }

  async deleteOne(siteNotificationId: number) {
    const deletedSiteNotification = await this.siteNotificationRepository.destroy({
      where: { 'id': siteNotificationId }
    });
    return await deletedSiteNotification;
  }
}
