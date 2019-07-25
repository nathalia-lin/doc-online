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

    async find(where: any) {
        const insurances = await this.insuranceRepository.findAll({
            where: where, include: [Site, User, Exam]
        });
        return insurances;
    }

    async findOne(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const insurance = await this.insuranceRepository.findOne({
            where: where, include: [Site, User, Exam]
        });
        return insurance;
    }

    async updateOne(id: number, body: any) {
        return await this.insuranceRepository.update(body, { where: { 'id': id } });
    }

    async deleteOne(insuranceId: number) {

        const deletedInsurance = await this.insuranceRepository.destroy({
            where: { 'id': insuranceId }
        });

        return await deletedInsurance;
    }
}
