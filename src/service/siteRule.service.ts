import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import SiteRule from 'src/models/siteRule.model';
import Site from 'src/models/site.model';

@Injectable()
export class SiteRuleService {
  constructor(
    @Inject('SiteRuleRepository') private readonly siteRuleRepository: typeof SiteRule
  ) { }

  async create(
    siteId: number,
    urlCheckNetwork: string,
    urlReportInternal: string,
    urlReportExternal: string,
    urlReportFormatOpen: string,
    urlWebviewerInternal: string,
    urlWebviewerExternal: string,
    urlKeyImagesInternal: string,
    urlKeyImagesExternal: string,
    urlExportImages: string,
    examsPerPage: number,
    allowReportStatus: string,
    notifyPatientEmail: boolean,
    notifyPatientSMS: boolean
  ) {
    const id: string = uuid();

    const newSiteRule = await this.siteRuleRepository.create({
      id,
      siteId,
      urlCheckNetwork,
      urlReportInternal,
      urlReportExternal,
      urlReportFormatOpen,
      urlWebviewerInternal,
      urlWebviewerExternal,
      urlKeyImagesInternal,
      urlKeyImagesExternal,
      urlExportImages,
      examsPerPage,
      allowReportStatus,
      notifyPatientEmail,
      notifyPatientSMS
    });

    return newSiteRule;
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
