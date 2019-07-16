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