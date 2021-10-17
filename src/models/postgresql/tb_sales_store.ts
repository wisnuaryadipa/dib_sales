import { Sequelize, DataTypes } from "sequelize";


const tb_sales_store = (sequelize: Sequelize) => {
    const tb_sales_store = sequelize.define('tb_sales_store', {
        storeName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'store_name'
        },
        contactNumber: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'contact_number'
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lng: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        customerName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'customer_name'
        },
        storeCategory: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'store_category'
        },
        firstSales: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'first_sales'
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

    return tb_sales_store;
}


export default tb_sales_store;