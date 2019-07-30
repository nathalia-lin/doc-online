import { Injectable } from '@nestjs/common';

import { CreateSiteDto } from '../dto/site.dto';
import Site from '../models/site.model';
import SiteRule from '../models/siteRule.model';
import SiteNotification from '../models/siteNotification.model';
import User from '../models/user.model';
import Insurance from '../models/insurance.model';
import Exam from '../models/exam.model';

@Injectable()
export class SiteService {

  async create(createSiteDto: CreateSiteDto): Promise<Site> {
    return await Site.create<Site>(createSiteDto);;
  }

  async find(where: any) {
    const sites = await Site.findAll({
      where: where, include: [SiteRule, SiteNotification, User, Insurance, Exam]
    });
    return sites;
  }

  async findOne(where: any) {
    if (typeof where === 'string') {
      where = { 'id': where }
    }
    const site = await Site.findOne({
      where: where, include: [SiteRule, SiteNotification, User, Insurance, Exam]
    });
    return site;
  }

  async updateOne(id: number, body: any) {
    return await Site.update(body, { where: { 'id': id } });
  }

  async deleteOne(siteId: number) {
    const deletedSite = await Site.destroy({
      where: { 'id': siteId }
    });
    return await deletedSite;
  }
}
