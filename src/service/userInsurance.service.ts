import { Injectable, Inject } from "@nestjs/common";
import { v4 as uuid } from 'uuid';

import UserInsurance from "src/models/userInsurance.model";

@Injectable()
export class UserInsuranceService {

    constructor(
        @Inject('UserInsuranceRepository') private readonly userInsuranceRepository: typeof UserInsurance
    ) { }

    async create(
        insuranceId: number,
        userId: number
    ) {
        const id: string = uuid();
        const newUserInsurance = await this.userInsuranceRepository.create({
            id, 
            insuranceId,
            userId
        });

        return newUserInsurance;
    }
    public async findAll() {
        return await this.userInsuranceRepository.findAll<UserInsurance>();
    }

    async findOne(userInsuranceId: number) {
        const userInsurance = await this.userInsuranceRepository.findOne({
            where: { 'id': userInsuranceId }
        });
        return userInsurance;
    }

    async deleteOne(userInsuranceId: number) {

        const deletedUserInsurance = await this.userInsuranceRepository.destroy({
            where: { 'id': userInsuranceId }
        });

        return await deletedUserInsurance;
    }
}