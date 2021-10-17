import { Sequelize, DataTypes } from "sequelize";


const Permissions = (sequelize: Sequelize) => {
    const Permission = sequelize.define('permissions', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'display_name'
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            field: 'updated_at'
        },
    }, {
        // Another option
    });

    return Permission;
}


export default Permissions;