import { Injectable, Inject } from "@nestjs/common";

import { CreateUserSiteDto } from "../dto/userSite.dto";
import UserSite from "../models/userSite.model";

@Injectable()
export class UserSiteService {

    constructor(
        @Inject('UserSiteRepository') private readonly userSiteRepository: typeof UserSite
    ) { }

    async create(createUserSiteDto: CreateUserSiteDto): Promise<UserSite> {
        return await this.userSiteRepository.create<UserSite>(createUserSiteDto);;
    }

    async find(where: any) {
        if (typeof where === 'string') {
            where = { 'id': where };
        }
        const userSite = await this.userSiteRepository.findAll({
            where: where
        });
        return userSite;
    }

    async deleteOne(userSiteId: number) {

        const deletedUserSite = await this.userSiteRepository.destroy({
            where: { 'id': userSiteId }
        });

        return await deletedUserSite;
    }
}