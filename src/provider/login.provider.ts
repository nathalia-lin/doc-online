import Login from '../models/login.model';

export const LoginProvider = [
  {
    provide: 'LoginRepository',
    useValue: Login,
  },
]; 