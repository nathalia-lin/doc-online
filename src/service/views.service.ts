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