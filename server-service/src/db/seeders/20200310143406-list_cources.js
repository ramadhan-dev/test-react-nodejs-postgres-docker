'use strict';

const { v4 } = require('uuid');
var faker = require("faker");

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
          Example:
         */
        let data = [];
        const cources = await queryInterface.sequelize.query("SELECT * from cources");
        cources[0].forEach(element => {
            let courceId = element['id'];
            for (let i = 0; i < 10; i++) {
                const dt = {
                    title: faker.lorem.words(),
                    chapter: faker.random.number(),
                    id: v4(),
                    courceId: courceId
                };
                data = [...data, dt];
            }
        });

        return queryInterface.bulkInsert('list_cources', data, {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          */
        return queryInterface.bulkDelete('list_cources', null, {});
    }
};