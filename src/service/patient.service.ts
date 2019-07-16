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

    async findAll() {
        return await this.patientRepository.findAll<Patient>();
    }

    async findOne(patientId: number) {
        const patient = await this.patientRepository.findOne({
            where: { 'id': patientId }, include: [Profile, Exam]
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
