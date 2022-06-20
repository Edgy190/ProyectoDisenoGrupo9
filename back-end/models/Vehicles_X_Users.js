import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Vehicle_x_UserModel = db.define('vehicles_x_users', {
    vehicle_plate: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, allowNull: false,
        unique: true }
});

export default Vehicle_x_UserModel;