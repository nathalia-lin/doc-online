import User from '../models/user.model';

export const UserProvider = [
  {
    provide: 'UserRepository',
    useValue: User,
  },
]; 