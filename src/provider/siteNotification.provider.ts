import SiteNotification from '../models/siteNotification.model';

export const SiteNotificationProvider = [
  {
    provide: 'SiteNotificationRepository',
    useValue: SiteNotification,
  },
];  