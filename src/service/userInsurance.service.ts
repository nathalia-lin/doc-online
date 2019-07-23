import { Injectable, Inject } from "@nestjs/common";

import { CreateUserInsuranceDto } from "../dto/userInsurance.dto";
import UserInsurance from "../models/userInsurance.model";

@Injectable()
export class UserInsuranceService {

    constructor(
        @Inject('UserInsuranceRepository') private readonly userInsuranceRepository: typeof UserInsurance
    ) { }

    async create(createUserInsuranceDto: CreateUserInsuranceDto): Promise<UserInsurance> {
        return await this.userInsuranceRepository.create<UserInsurance>(createUserInsuranceDto);;
    }

    async find(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where };
        }
        const userInsurance = await this.userInsuranceRepository.findAll({
            where: where
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