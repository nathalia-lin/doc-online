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
