import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Profile } from './Profile.js'

export const Role = sequelize.define('roles', {
    id_role: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role_description: {
        type: DataTypes.STRING,
    },
    role_state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: false
})

Role.hasOne(Profile, {
    foreignKey: 'roleId',
    sourceKey: 'id_role'
});
Profile.belongsTo(Role, {
    foreignKey: 'roleId',
    targetKey: 'id_role'
});
