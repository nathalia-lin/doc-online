import { Injectable, Inject } from '@nestjs/common';

import { CreateDoctorDto } from '../dto/doctor.dto';
import Doctor from '../models/doctor.model';
import Profile from '../models/profile.model';
import Exam from '../models/exam.model';

@Injectable()
export class DoctorService {

    constructor(
        @Inject('DoctorRepository') private readonly doctorRepository: typeof Doctor
    ) { }

    async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
        return await Doctor.create<Doctor>(createDoctorDto);;
    }

    async find(where: object) {
        const doctors = await this.doctorRepository.findAll({
            where: where, include: [Profile, { model: Exam, as: 'requestedExams' }, { model: Exam, as: 'consultedExams' }]
        });
        return doctors;
    }

    async findOne(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const doctor = await this.doctorRepository.findOne({
            where: where, include: [Profile, { model: Exam, as: 'requestedExams' }, { model: Exam, as: 'consultedExams' }]
        });
        return doctor;
    }

    async updateOne(id: number, body: any) {
        return await this.doctorRepository.update(body, { where: { 'id': id } });
    }

    async deleteOne(doctorId: number) {
        const deletedDoctor = await this.doctorRepository.destroy({
            where: { 'id': doctorId }
        });
        return await deletedDoctor;
    }
}
