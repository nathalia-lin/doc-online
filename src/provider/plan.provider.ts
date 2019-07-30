import Plan from '../models/plan.model';

export const PlanProvider = [
  {
    provide: 'PlanRepository',
    useValue: Plan,
  },
]; 