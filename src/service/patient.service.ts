import { Injectable } from '@nestjs/common';

import { CreatePatientDto } from '../dto/patient.dto';
import Patient from '../models/patient.model';
import Profile from '../models/profile.model';
import Exam from '../models/exam.model';

@Injectable()
export class PatientService {

    async create(createPatientDto: CreatePatientDto): Promise<Patient> {
        return await Patient.create<Patient>(createPatientDto);;
    }

    async find(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where };
        }
        const patient = await Patient.findAll({
            where: where, include: [Profile, Exam]
        });
        return patient;
    }

    async deleteOne(patientId: number) {

        const deletedPatient = await Patient.destroy({
            where: { 'id': patientId }
        });

        return await deletedPatient;
    }
}
