import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import Site from 'src/models/site.model';
import SiteRule from 'src/models/siteRule.model';
import SiteNotification from 'src/models/siteNotification.model';
import UserSite from 'src/models/userSite.model';
import User from 'src/models/user.model';
import Insurance from 'src/models/insurance.model';
import Exam from 'src/models/exam.model';

@Injectable()
export class SiteService {
  constructor(
    @Inject('SiteRepository') private readonly siteRepository: typeof Site
  ) { }

  async create(
    parentId: number,
    logo: string,
    networkId: string,
    cnpj: string,
    name: string,
    addressId: number
  ) {
    const id: string = uuid();
    const newSite = await this.siteRepository.create({
      id,
      parentId,
      logo,
      networkId,
      cnpj,
      name,
      addressId
    });

    return newSite;
  }

  async findAll() {
    return await this.siteRepository.findAll<Site>();
  }

  async findOne(siteId: number) {
    const site = await this.siteRepository.findOne({
      where: { 'id': siteId }, include: [SiteRule, SiteNotification, User, Insurance, Exam]
    });
    return site;
  }

  async deleteOne(siteId: number) {

    const deletedSite = await this.siteRepository.destroy({
      where: { 'id': siteId }
    });

    return await deletedSite;
  }
}
