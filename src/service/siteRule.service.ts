import { Injectable, Inject } from '@nestjs/common';

import { CreateSiteRuleDto } from '../dto/siteRule.dto';
import SiteRule from '../models/siteRule.model';
import Site from '../models/site.model';

@Injectable()
export class SiteRuleService {

  async create(createSiteRuleDto: CreateSiteRuleDto): Promise<SiteRule> {
    return await SiteRule.create<SiteRule>(createSiteRuleDto);;
  }

  async find(where: any) {
    const siteRules = await SiteRule.findAll({
      where: where, include: [Site]
    });
    return siteRules;
  }

  async findOne(where: any) {
    if (typeof where === 'string') {
      where = { 'id': where }
    }
    const siteRule = await SiteRule.findOne({
      where: where, include: [Site]
    });
    return siteRule;
  }

  async updateOne(id: number, body: any) {
    return await SiteRule.update(body, { where: { 'id': id } });
  }

  async deleteOne(siteRuleId: number) {
    const deletedSiteRule = await SiteRule.destroy({
      where: { 'id': siteRuleId }
    });
    return await deletedSiteRule;
  }
}
