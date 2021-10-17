"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var Roles = function (sequelize) {
    var Roles = sequelize.define('roles', {
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        display_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        subRole: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            field: 'sub_role'
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
    return Roles;
};
exports["default"] = Roles;
