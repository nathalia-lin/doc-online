import Views from '../models/views.model';

export const ViewsProvider = [
    {
        provide: 'ViewsRepository',
        useValue: Views,
    },
]; 