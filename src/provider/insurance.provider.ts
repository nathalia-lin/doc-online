import Insurance from '../models/insurance.model';

export const InsuranceProvider = [
    {
        provide: 'InsuranceRepository',
        useValue: Insurance,
    },
]; 