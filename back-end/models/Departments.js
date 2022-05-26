import db from "../config/db.js";
import { DataTypes } from "sequelize";

const DepartmentModel = db.define('departments', {
    name_department: { type: DataTypes.STRING }
});

export default DepartmentModel;