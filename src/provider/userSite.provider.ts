import UserSite from '../models/userSite.model';

export const UserSiteProvider = [
  {
    provide: 'UserSiteRepository',
    useValue: UserSite,
  },
]; 