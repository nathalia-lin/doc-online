import { Injectable } from "@nestjs/common";

import { CreateViewsDto } from "../dto/views.dto";
import Views from "../models/views.model";
import User from "../models/user.model";
import Exam from "../models/exam.model";

@Injectable()
export class ViewsService {

    async create(createViewsDto: CreateViewsDto): Promise<Views> {
        return await Views.create<Views>(createViewsDto);;
    }

    async find(where: any) {
        const views = await Views.findAll({
            where: where, include: [User, Exam]
        });
        return views;
    }

    async findOne(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const view = await Views.findOne({
            where: where, include: [User, Exam]
        });
        return view;
    }

    async updateOne(id: number, body: any) {
        return await Views.update(body, { where: { 'id': id } });
    }

    async deleteOne(viewId: number) {
        const deletedView = await Views.destroy({
            where: { 'id': viewId }
        });
        return await deletedView;
    }
}