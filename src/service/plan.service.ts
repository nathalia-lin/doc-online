import { Injectable, Inject } from '@nestjs/common';

import { CreatePlanDto } from '../dto/plan.dto';
import Plan from '../models/plan.model';
import Insurance from '../models/insurance.model';

@Injectable()
export class PlanService {
    constructor(
        @Inject('PlanRepository') private readonly planRepository: typeof Plan
    ) { }

    async create(createPlanDto: CreatePlanDto): Promise<Plan> {
        return await this.planRepository.create<Plan>(createPlanDto);;
    }

    async find(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where };
        }
        const plan = await this.planRepository.findAll({
            where: where, include: [Insurance]
        });
        return plan;
    }

    async deleteOne(planId: number) {

        const deletedPlan = await this.planRepository.destroy({
            where: { 'id': planId }
        });

        return await deletedPlan;
    }
}
