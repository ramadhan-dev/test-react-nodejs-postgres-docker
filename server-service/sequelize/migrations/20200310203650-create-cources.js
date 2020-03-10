module.exports.up = (queryInterface, dataTypes) => {
    return queryInterface.createTable(
        "cources", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: dataTypes.UUID
            },
            title: {
                allowNull: false,
                length: 50,
                type: dataTypes.STRING
            },
            description: {
                allowNull: false,
                length: 255,
                type: dataTypes.STRING
            },
            price: {
                allowNull: false,
                length: 255,
                type: dataTypes.INTEGER
            },
            author: {
                allowNull: false,
                length: 50,
                type: dataTypes.STRING
            },
            level: {
                allowNull: false,
                length: 20,
                type: dataTypes.STRING
            },
            image: {
                allowNull: false,
                length: 225,
                type: dataTypes.STRING
            },
            subscriber: {
                allowNull: true,
                length: 6,
                type: dataTypes.INTEGER,
                defaultValue: 0
            },
            createdAt: {
                allowNull: true,
                length: 10,
                type: dataTypes.DATE,
                defaultValue: dataTypes.literal("NOW()")
            },
            updatedAt: {
                allowNull: true,
                length: 10,
                type: dataTypes.DATE
            },
            DeletedAt: {
                allowNull: true,
                length: 10,
                type: dataTypes.DATE
            }
        }, {
            chartset: "utf8",
            timestamps: false
        }
    );
}


module.exports.down = queryInterface => queryInterface.dropTable('cources')