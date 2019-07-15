import { Injectable, Inject } from "@nestjs/common";
import { v4 as uuid } from 'uuid';

import UserSite from "src/models/userSite.model";
import User from "src/models/user.model";
import Site from "src/models/site.model";

@Injectable()
export class UserSiteService {

    constructor(
        @Inject('UserSiteRepository') private readonly userSiteRepository: typeof UserSite
    ) { }

    async create(
        userId: number,
        siteId: number,
        createdBy: string
    ) {
        const id: string = uuid();
        const newUser = await this.userSiteRepository.create({
            id, 
            userId,
            siteId,
            createdBy
        });

        return newUser;
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