import Profile from '../models/profile.model';

export const ProfileProvider = [
  {
    provide: 'ProfileRepository',
    useValue: Profile,
  },
];