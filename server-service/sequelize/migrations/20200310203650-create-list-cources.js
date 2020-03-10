module.exports.up = (queryInterface, dataTypes) => {
    return queryInterface.createTable(
        "list_cources", {
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
            courceId: {
                allowNull: false,
                references: {
                    key: "id",
                    model: "cources"
                },
                type: dataTypes.UUID
            },
            chapter: {
                allowNull: false,
                length: 2,
                type: dataTypes.INTEGER
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


module.exports.down = queryInterface => queryInterface.dropTable('list_cources')