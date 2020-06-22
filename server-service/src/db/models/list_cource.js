import { DataTypes, Model } from "sequelize";
import sequelize from '../connection';

export class ListCources extends Model {}

ListCources.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    title: {
        allowNull: false,
        length: 50,
        type: DataTypes.STRING
    },
    courceId: {
        allowNull: false,
        references: {
            key: "id",
            model: "cources"
        },
        type: DataTypes.UUID
    },
    chapter: {
        allowNull: false,
        length: 2,
        type: DataTypes.INTEGER
    }
}, {
    modelName: "list_cource",
    sequelize
});
