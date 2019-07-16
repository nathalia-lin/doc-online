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
    public async findAll() {
        return await this.userSiteRepository.findAll<UserSite>();
    }

    async findOne(userSiteId: number) {
        const userSite = await this.userSiteRepository.findOne({
            where: { 'id': userSiteId }
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