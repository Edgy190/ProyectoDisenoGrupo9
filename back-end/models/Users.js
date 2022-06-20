import db from "../config/db.js";
import { DataTypes } from "sequelize";

const UserModel = db.define('users', {
    full_name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, allowNull: false,
        unique: true, primaryKey: true },
    email2: { type: DataTypes.STRING, allowNull: true, unique: {
        args: true,
        msg: 'Email address already in use'
    }},
    password_user: { type: DataTypes.STRING },
    type_user: { type: DataTypes.STRING },
    phone_number: { type: DataTypes.INTEGER },
    description_job: { type: DataTypes.STRING },
    disability: { type: DataTypes.STRING },
    id_department: { type: DataTypes.INTEGER }
});

export default UserModel;