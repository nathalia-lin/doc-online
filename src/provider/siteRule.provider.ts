import SiteRule from '../models/siteRule.model';

export const SiteRuleProvider = [
  {
    provide: 'SiteRuleRepository',
    useValue: SiteRule,
  },
]; 