import { Sequelize, DataTypes } from "sequelize";

const PermissionRole = (sequelize: Sequelize) => {
    const PermissionRole = sequelize.define('permission_role', {
        permissionId: {
            type: DataTypes.NUMBER,
            allowNull: false,
            field: 'permission_id'
        },
        roleId: {
            type: DataTypes.NUMBER,
            allowNull: true,
            field: 'role_id'
        },
    }, {
        // Another option
    });
    
    return PermissionRole;
}

export default PermissionRole;