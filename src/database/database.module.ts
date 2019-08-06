import { Module } from '@nestjs/common';

import { databaseProviders } from './database.provider';

/**
 * Takes in database provider, which initializes sequelize database
 */

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})

export class DatabaseModule { }
