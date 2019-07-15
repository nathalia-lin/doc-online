import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import Insurance from 'src/models/insurance.model';
import Site from 'src/models/site.model';
import User from 'src/models/user.model';
import Exam from 'src/models/exam.model';

@Injectable()
export class InsuranceService {
    constructor(
        @Inject('InsuranceRepository') private readonly insuranceRepository: typeof Insurance
    ) { }

    async create(
        siteId: number,
        name: string
    ) {
        const id: string = uuid();
        const newInsurance = await this.insuranceRepository.create({
            id,
            siteId,
            name
        });

        return newInsurance;
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
