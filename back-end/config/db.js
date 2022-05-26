import {Sequelize} from "sequelize";

const db = new Sequelize(
    "park_tec",
    "root",
    "QWER1234", {
        dialect: "mysql"
    }
);

export default db;