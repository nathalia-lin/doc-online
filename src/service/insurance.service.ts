import { Injectable, Inject } from '@nestjs/common';

import { CreateInsuranceDto } from '../dto/insurance.dto';
import Insurance from '../models/insurance.model';
import Site from '../models/site.model';
import User from '../models/user.model';
import Exam from '../models/exam.model';

@Injectable()
export class InsuranceService {
    constructor(
        @Inject('InsuranceRepository') private readonly insuranceRepository: typeof Insurance
    ) { }

    async create(createInsuranceDto: CreateInsuranceDto): Promise<Insurance> {
        return await this.insuranceRepository.create(createInsuranceDto);;
    }

    async findAll() {
        return await this.insuranceRepository.findAll<Insurance>();
    }

    async findOne(insuranceId: number) {
        const insurance = await this.insuranceRepository.findOne({
            where: { 'id': insuranceId }, include: [Site, User, Exam]
        });
        return insurance;
    }

    async deleteOne(insuranceId: number) {

        const deletedInsurance = await this.insuranceRepository.destroy({
            where: { 'id': insuranceId }
        });

        return await deletedInsurance;
    }
}
