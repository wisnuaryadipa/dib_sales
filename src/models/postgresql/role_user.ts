import { Sequelize, DataTypes } from "sequelize";

const RoleUser = (sequelize: Sequelize) => {
    const RoleUser = sequelize.define('role_user', {
        userId: {
            type: DataTypes.NUMBER,
            allowNull: false,
            field: 'user_id'
        },
        roleId: {
            type: DataTypes.NUMBER,
            allowNull: true,
            field: 'role_id'
        },
    }, {
        // Another option
    });

    return RoleUser;
}

export default RoleUser;