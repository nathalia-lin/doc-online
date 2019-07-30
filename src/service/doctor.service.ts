import { Injectable } from '@nestjs/common';

import { CreateDoctorDto } from '../dto/doctor.dto';
import Doctor from '../models/doctor.model';
import Profile from '../models/profile.model';
import Exam from '../models/exam.model';

@Injectable()
export class DoctorService {

    async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
        return await Doctor.create<Doctor>(createDoctorDto);;
    }

    async find(where: object) {
        const doctors = await Doctor.findAll({
            where: where, include: [Profile, { model: Exam, as: 'requestedExams' }, { model: Exam, as: 'consultedExams' }]
        });
        return doctors;
    }

    async findOne(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const doctor = await Doctor.findOne({
            where: where, include: [Profile, { model: Exam, as: 'requestedExams' }, { model: Exam, as: 'consultedExams' }]
        });
        return doctor;
    }

    async updateOne(id: number, body: any) {
        return await Doctor.update(body, { where: { 'id': id } });
    }

    async deleteOne(doctorId: number) {
        const deletedDoctor = await Doctor.destroy({
            where: { 'id': doctorId }
        });
        return await deletedDoctor;
    }
}
