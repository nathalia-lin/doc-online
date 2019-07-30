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
        const patients = await Patient.findAll({
            where: where, include: [Profile, Exam]
        });
        return patients;
    }

    async findOne(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const patient = await Patient.findOne({
            where: where, include: [Profile, Exam]
        });
        return patient;
    }

    async updateOne(id: number, body: any) {
        return await Patient.update(body, { where: { 'id': id } });
    }

    async deleteOne(patientId: number) {
        const deletedPatient = await Patient.destroy({
            where: { 'id': patientId }
        });
        return await deletedPatient;
    }
}
