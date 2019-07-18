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

  async find(where: any) {
    if (typeof where === 'string') {
      where = { 'id': where };
    }
    const siteRule = await this.siteRuleRepository.findAll({
      where: where, include: [Site]
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
