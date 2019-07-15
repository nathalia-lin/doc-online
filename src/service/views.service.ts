import { Injectable, Inject } from "@nestjs/common";
import { v4 as uuid } from 'uuid';

import Views from "src/models/views.model";
import User from "src/models/user.model";
import Exam from "src/models/exam.model";

@Injectable()
export class ViewsService {

    constructor(
        @Inject('ViewsRepository') private readonly viewsRepository: typeof Views
    ) { }

    async create(
        examId: number,
        userId: number,
        dateViewed: Date,
        typeViewed: string
    ) {
        const id: string = uuid();
        const newView = await this.viewsRepository.create({
            id, 
            examId,
            userId,
            dateViewed,
            typeViewed
        });

        return newView;
    }
    public async findAll() {
        return await this.viewsRepository.findAll<Views>();
    }

    async findOne(viewId: number) {
        const view = await this.viewsRepository.findOne({
            where: { 'id': viewId }, include: [User, Exam]
        });
        return view;
    }

    async deleteOne(viewId: number) {

        const deletedView = await this.viewsRepository.destroy({
            where: { 'id': viewId }
        });

        return await deletedView;
    }
}