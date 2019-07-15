import LogExam from '../models/logExam.model';

export const LogExamProvider = [
    {
        provide: 'LogExamRepository',
        useValue: LogExam,
    },
];