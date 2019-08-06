import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        database: 'doc-online',
        username: 'postgres',
        password: 'postgres',
        dialect: 'postgres',
        modelPaths: [__dirname + '/../models'],
        logging: false
      });
      
      await sequelize.sync({});
      // Clean out database
      // await sequelize.sync({force:true});

      return sequelize;
    },
  },
];
