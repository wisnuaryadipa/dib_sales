import { Sequelize, DataTypes } from "sequelize";


const Permissions = (sequelize: Sequelize) => {
    const Permission = sequelize.define('permissions', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        display_name: {
            type: DataTypes.STRING,
            allowNull: true,
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