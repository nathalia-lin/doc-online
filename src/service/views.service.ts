import { Injectable, Inject } from "@nestjs/common";

import { CreateViewsDto } from "../dto/views.dto";
import Views from "../models/views.model";
import User from "../models/user.model";
import Exam from "../models/exam.model";

@Injectable()
export class ViewsService {

    constructor(
        @Inject('ViewsRepository') private readonly viewsRepository: typeof Views
    ) { }

    async create(createViewsDto: CreateViewsDto): Promise<Views> {
        return await this.viewsRepository.create<Views>(createViewsDto);;
    }

    async find(where: any) {
        const views = await this.viewsRepository.findAll({
            where: where, include: [User, Exam]
        });
        return views;
    }

    async findOne(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const view = await this.viewsRepository.findOne({
            where: where, include: [User, Exam]
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