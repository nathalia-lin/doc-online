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

    async createUserInsurance(insuranceId, userId) {
        let userInsurance = {
            'insuranceId': insuranceId,
            'userId': userId,
        } as CreateUserInsuranceDto;
        await this.userInsuranceRepository.create(userInsurance);
    }

    async find(where: any) {
        const userInsurances = await this.userInsuranceRepository.findAll({
            where: where
        });
        return userInsurances;
    }

    async findOne(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const userInsurance = await this.userInsuranceRepository.findOne({
            where: where
        });
        return userInsurance;
    }

    async updateOne(id: number, body: any) {
        return await this.userInsuranceRepository.update(body, { where: { 'id': id } });
    }

    async deleteOne(userInsuranceId: number) {
        const deletedUserInsurance = await this.userInsuranceRepository.destroy({
            where: { 'id': userInsuranceId }
        });
        return await deletedUserInsurance;
    }
}