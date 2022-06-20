import db from "../config/db.js";
import { DataTypes } from "sequelize";

const VehicleModel = db.define('vehicles', {
    vehicle_plate: { type: DataTypes.STRING, primaryKey: true },
    vehicle_brand: { type: DataTypes.STRING },
    vehicle_series: { type: DataTypes.STRING }
});

export default VehicleModel;