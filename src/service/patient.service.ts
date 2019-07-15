import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import Patient from 'src/models/patient.model';
import Profile from 'src/models/profile.model';
import Exam from 'src/models/exam.model';

@Injectable()
export class PatientService {
    constructor(
        @Inject('PatientRepository') private readonly patientRepository: typeof Patient
    ) { }

    async create(
        profileId: number,
        pid: string
    ) {
        const id: string = uuid();
        const newPatient = await this.patientRepository.create({
            id,
            profileId,
            pid
        });

        return newPatient;
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
