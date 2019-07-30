import { Injectable, Inject } from '@nestjs/common';

import { CreateSiteDto } from '../dto/site.dto';
import Site from '../models/site.model';
import SiteRule from '../models/siteRule.model';
import SiteNotification from '../models/siteNotification.model';
import User from '../models/user.model';
import Insurance from '../models/insurance.model';
import Exam from '../models/exam.model';

@Injectable()
export class SiteService {

  constructor(
    @Inject('SiteRepository') private readonly siteRepository: typeof Site
  ) { }

  async create(createSiteDto: CreateSiteDto): Promise<Site> {
    return await this.siteRepository.create<Site>(createSiteDto);;
  }

  async find(where: any) {
    const sites = await this.siteRepository.findAll({
      where: where, include: [SiteRule, SiteNotification, User, Insurance, Exam]
    });
    return sites;
  }

  async findOne(where: any) {
    if (typeof where === 'string') {
      where = { 'id': where }
    }
    const site = await this.siteRepository.findOne({
      where: where, include: [SiteRule, SiteNotification, User, Insurance, Exam]
    });
    return site;
  }

  async updateOne(id: number, body: any) {
    return await this.siteRepository.update(body, { where: { 'id': id } });
  }

  async deleteOne(siteId: number) {
    const deletedSite = await this.siteRepository.destroy({
      where: { 'id': siteId }
    });
    return await deletedSite;
  }
}
