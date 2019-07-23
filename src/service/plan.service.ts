import { Injectable } from '@nestjs/common';

import { CreatePlanDto } from '../dto/plan.dto';
import Plan from '../models/plan.model';
import Insurance from '../models/insurance.model';

@Injectable()
export class PlanService {

    async create(createPlanDto: CreatePlanDto): Promise<Plan> {
        return await Plan.create<Plan>(createPlanDto);;
    }

    async find(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where };
        }
        const plan = await Plan.findAll({
            where: where, include: [Insurance]
        });
        return plan;
    }

    async deleteOne(planId: number) {

        const deletedPlan = await Plan.destroy({
            where: { 'id': planId }
        });

        return await deletedPlan;
    }
}
