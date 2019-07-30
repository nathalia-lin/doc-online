import { Injectable } from "@nestjs/common";

import { CreateUserInsuranceDto } from "../dto/userInsurance.dto";
import UserInsurance from "../models/userInsurance.model";

@Injectable()
export class UserInsuranceService {

    async create(createUserInsuranceDto: CreateUserInsuranceDto): Promise<UserInsurance> {
        return await UserInsurance.create<UserInsurance>(createUserInsuranceDto);;
    }

    async find(where: any) {
        const userInsurances = await UserInsurance.findAll({
            where: where
        });
        return userInsurances;
    }

    async findOne(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const userInsurance = await UserInsurance.findOne({
            where: where
        });
        return userInsurance;
    }

    async updateOne(id: number, body: any) {
        return await UserInsurance.update(body, { where: { 'id': id } });
    }

    async deleteOne(userInsuranceId: number) {
        const deletedUserInsurance = await UserInsurance.destroy({
            where: { 'id': userInsuranceId }
        });
        return await deletedUserInsurance;
    }
}