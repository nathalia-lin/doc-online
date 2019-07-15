import Exam from '../models/exam.model';

export const ExamProvider = [
    {
        provide: 'ExamRepository',
        useValue: Exam,
    },
];