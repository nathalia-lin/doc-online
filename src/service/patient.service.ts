import { Injectable, Inject } from '@nestjs/common';

import { CreatePatientDto } from '../dto/patient.dto';
import Patient from '../models/patient.model';
import Profile from '../models/profile.model';
import Exam from '../models/exam.model';

@Injectable()
export class PatientService {
    constructor(
        @Inject('PatientRepository') private readonly patientRepository: typeof Patient
    ) { }

    async create(createPatientDto: CreatePatientDto): Promise<Patient> {
        return await this.patientRepository.create<Patient>(createPatientDto);;
    }

    async find(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where };
        }
        const patient = await this.patientRepository.findAll({
            where: where, include: [Profile, Exam]
        });
        return patient;
    }

    async deleteOne(patientId: number) {

        const deletedPatient = await this.patientRepository.destroy({
            where: { 'id': patientId }
        });

        return await deletedPatient;
    }
}
