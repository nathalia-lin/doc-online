import { Injectable } from '@nestjs/common';

import { CreateInsuranceDto } from '../dto/insurance.dto';
import Insurance from '../models/insurance.model';
import Site from '../models/site.model';
import User from '../models/user.model';
import Exam from '../models/exam.model';

@Injectable()
export class InsuranceService {

    async create(createInsuranceDto: CreateInsuranceDto): Promise<Insurance> {
        return await Insurance.create(createInsuranceDto);;
    }

    async find(where: any) {
        const insurances = await Insurance.findAll({
            where: where, include: [Site, User, Exam]
        });
        return insurances;
    }

    async findOne(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const insurance = await Insurance.findOne({
            where: where, include: [Site, User, Exam]
        });
        return insurance;
    }

    async updateOne(id: number, body: any) {
        return await Insurance.update(body, { where: { 'id': id } });
    }

    async deleteOne(insuranceId: number) {
        const deletedInsurance = await Insurance.destroy({
            where: { 'id': insuranceId }
        });
        return await deletedInsurance;
    }
}
