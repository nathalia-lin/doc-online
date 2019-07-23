import Site from '../models/site.model';

export const SiteProvider = [
  {
    provide: 'SiteRepository',
    useValue: Site,
  },
];