import Sequelize from 'sequelize';

 export const sequelize = new Sequelize(
     'projectsdb',
     'postgres',
     'jotaesposa',
     {
    host: 'localhost',
    dialect: 'postgres'
     }

    )