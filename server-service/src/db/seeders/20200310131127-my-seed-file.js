'use strict';

const { v4 } = require('uuid');
var faker = require("faker");

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
        */
        let data = [];
        for (let i = 0; i < 10; i++) {
            const dt = {
                title: faker.lorem.words(),
                description: faker.lorem.words(),
                price: faker.commerce.price(),
                image: faker.image.abstract(),
                author: faker.name.findName(),
                level: "beginer",
                id: v4(),
                createdAt: Sequelize.literal("NOW()")
            };
            data = [...data, dt];
        }
        return queryInterface.bulkInsert('cources', data, {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
          */
        return queryInterface.bulkDelete('cources', null, {});
    }
};