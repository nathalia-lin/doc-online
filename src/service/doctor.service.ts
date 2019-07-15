import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import Doctor from 'src/models/doctor.model';
import Profile from 'src/models/profile.model';
import Exam from 'src/models/exam.model';

@Injectable()
export class DoctorService {
    constructor(
        @Inject('DoctorRepository') private readonly doctorRepository: typeof Doctor
    ) { }

    async create(
        profileId: number,
        docType: string,
        docIssuer: string,
        docNum: string
    ) {
        const id: string = uuid();
        const newDoctor = await this.doctorRepository.create({
            id,
            profileId,
            docType,
            docIssuer,
            docNum
        });

        return newDoctor;
    }

    async findAll() {
        return await this.doctorRepository.findAll<Doctor>();
    }

    async findOne(doctorId: number) {
        const doctor = await this.doctorRepository.findOne({
            where: { 'id': doctorId }, include: [Profile, Exam]
        });
        return doctor;
    }

    async deleteOne(doctorId: number) {

        const deletedDoctor = await this.doctorRepository.destroy({
            where: { 'id': doctorId }
        });

        return await deletedDoctor;
    }
}
