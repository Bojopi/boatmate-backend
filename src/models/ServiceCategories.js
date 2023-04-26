import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const ServiceCategories = sequelize.define('service_categories', {
    serviceId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'services',
            key: 'id_service'
        }
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categories',
            key: 'id_category'
        }
    },
}, {
    timestamps: false
});