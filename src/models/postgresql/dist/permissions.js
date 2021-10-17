"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var Permissions = function (sequelize) {
    var Permission = sequelize.define('permissions', {
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        displayName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            field: 'display_name'
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            defaultValue: sequelize_1.DataTypes.NOW,
            field: 'created_at'
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            defaultValue: sequelize_1.DataTypes.NOW,
            field: 'updated_at'
        }
    }, {
    // Another option
    });
    return Permission;
};
exports["default"] = Permissions;
