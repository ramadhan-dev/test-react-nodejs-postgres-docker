import { DataTypes, Model } from "sequelize";
import sequelize from '../connection';

export class Cources extends Model {}

Cources.init({
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
    description: {
        allowNull: false,
        length: 255,
        type: DataTypes.STRING
    },
    price: {
        allowNull: false,
        length: 255,
        type: DataTypes.INTEGER
    },
    author: {
        allowNull: false,
        length: 50,
        type: DataTypes.STRING
    },
    level: {
        allowNull: false,
        length: 20,
        type: DataTypes.STRING
    },
    image: {
        allowNull: false,
        length: 225,
        type: DataTypes.STRING
    },
    subscriber: {
        allowNull: true,
        length: 6,
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    modelName: "cource",
    sequelize
});