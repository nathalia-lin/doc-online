import Doctor from '../models/doctor.model';

export const DoctorProvider = [
  {
    provide: 'DoctorRepository',
    useValue: Doctor,
  },
]; 