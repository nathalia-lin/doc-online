import UserInsurance from '../models/userInsurance.model';

export const UserInsuranceProvider = [
    {
        provide: 'UserInsuranceRepository',
        useValue: UserInsurance,
    },
]; 