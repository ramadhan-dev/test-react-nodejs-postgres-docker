module.exports.up = (queryInterface, dataTypes) => {
    return queryInterface.createTable(
        "comments", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: dataTypes.UUID
            },
            listCourceId: {
                allowNull: false,
                references: {
                    key: "id",
                    model: "list_cources"
                },
                type: dataTypes.UUID
            },
            body: {
                allowNull: false,
                length: 255,
                type: dataTypes.STRING
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
};

module.exports.down = queryInterface =>
    queryInterface.dropTable("comments");