import { Injectable } from "@nestjs/common";

import { CreateUserSiteDto } from "../dto/userSite.dto";
import UserSite from "../models/userSite.model";

@Injectable()
export class UserSiteService {

    async create(createUserSiteDto: CreateUserSiteDto): Promise<UserSite> {
        return await UserSite.create<UserSite>(createUserSiteDto);;
    }

    async find(where: any) {
        const userSites = await UserSite.findAll({
            where: where
        });
        return userSites;
    }

    async findOne(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where }
        }
        const userSite = await UserSite.findOne({
            where: where
        });
        return userSite;
    }

    async updateOne(id: number, body: any) {
        return await UserSite.update(body, { where: { 'id': id } });
    }

    async deleteOne(userSiteId: number) {
        const deletedUserSite = await UserSite.destroy({
            where: { 'id': userSiteId }
        });
        return await deletedUserSite;
    }
}