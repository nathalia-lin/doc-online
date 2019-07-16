import { Injectable, Inject } from '@nestjs/common';

import { CreateSiteRuleDto } from '../dto/siteRule.dto';
import SiteRule from '../models/siteRule.model';
import Site from '../models/site.model';

@Injectable()
export class SiteRuleService {
  constructor(
    @Inject('SiteRuleRepository') private readonly siteRuleRepository: typeof SiteRule
  ) { }

  async create(createSiteRuleDto: CreateSiteRuleDto): Promise<SiteRule> {
    return await this.siteRuleRepository.create<SiteRule>(createSiteRuleDto);;
  }

  async findAll() {
    return await this.siteRuleRepository.findAll<SiteRule>();
  }

  async findOne(siteRuleId: number) {
    const siteRule = await this.siteRuleRepository.findOne({
      where: { 'id': siteRuleId }, include: [Site]
    });
    return siteRule;
  }

  async deleteOne(siteRuleId: number) {

    const deletedSiteRule = await this.siteRuleRepository.destroy({
      where: { 'id': siteRuleId }
    });

    return await deletedSiteRule;
  }
}
