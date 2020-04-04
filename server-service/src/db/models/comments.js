import { DataTypes, Model } from "sequelize";
import sequelize from "../connection";

export class Comments extends Model {}

Comments.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    body: {
        allowNull: false,
        length: 255,
        type: DataTypes.STRING
    },
    listCourceId: {
        allowNull: false,
        references: {
            key: "id",
            model: "list_cource"
        },
        type: DataTypes.UUID
    }
}, {
    modelName: "comments",
    sequelize
});