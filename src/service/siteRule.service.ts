import { Injectable } from '@nestjs/common';

import { CreateSiteRuleDto } from '../dto/siteRule.dto';
import SiteRule from '../models/siteRule.model';
import Site from '../models/site.model';

@Injectable()
export class SiteRuleService {

  async create(createSiteRuleDto: CreateSiteRuleDto): Promise<SiteRule> {
    return await SiteRule.create<SiteRule>(createSiteRuleDto);;
  }

  async find(where: any) {
    if (typeof where === 'string') {
      where = { 'id': where };
    }
    const siteRule = await SiteRule.findAll({
      where: where, include: [Site]
    });
    return siteRule;
  }

  async deleteOne(siteRuleId: number) {

    const deletedSiteRule = await SiteRule.destroy({
      where: { 'id': siteRuleId }
    });

    return await deletedSiteRule;
  }
}
