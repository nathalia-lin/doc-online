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
        return await this.doctorRepository.create<Doctor>(createDoctorDto);;
    }

    async find(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where };
        }
        const doctor = await this.doctorRepository.findAll({
            where: where, include: [Profile, {model: Exam, as: 'requestedExams'}, {model: Exam, as: 'consultedExams'}]
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
