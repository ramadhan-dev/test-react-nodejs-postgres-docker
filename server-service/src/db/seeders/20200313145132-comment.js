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
        const list = await queryInterface.sequelize.query("SELECT id from list_cources");
        let data = [];
        list[0].forEach(value => {
            let listCourcesId = value["id"];
            for (let i = 0; i < 10; i++) {
                const dt = {
                    body: faker.lorem.words(),
                    id: v4(),
                    listCourceId: listCourcesId
                };
                data = [...data, dt];
            }
        });
        return queryInterface.bulkInsert('comments', data, {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          */
        return queryInterface.bulkDelete('comments', null, {});
    }
};