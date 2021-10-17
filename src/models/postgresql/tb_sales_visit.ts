import { Sequelize, DataTypes } from "sequelize";


const tb_sales_store = (sequelize: Sequelize) => {
    const tb_sales_store = sequelize.define('tb_sales_store', {
        idUser: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'id_user'
        },
        idStore: {
            type: DataTypes.NUMBER,
            allowNull: false,
            field: 'id_store'
        },
        timeVisit: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'time_visit'
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lat: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lng: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        statusResponse: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'status_response'
        },
        statusRepeatOrder: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'status_repeat_order'
        },
        isStatusChange: {
            type: DataTypes.NUMBER,
            allowNull: true,
            field: 'is_status_change'
        },
        presentTo: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'present_to'
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
        salesName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'sales_name'
        },
        picName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'pic_name'
        },
        isVisitingOutsideStore: {
            type: DataTypes.NUMBER,
            allowNull: true,
            field: 'is_visiting_outside_store'
        },
    }, {
        // Another option
    });

    return tb_sales_store;
}


export default tb_sales_store;