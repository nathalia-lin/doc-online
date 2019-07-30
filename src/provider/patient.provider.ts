import Patient from '../models/patient.model';

export const PatientProvider = [
  {
    provide: 'PatientRepository',
    useValue: Patient,
  },
];  