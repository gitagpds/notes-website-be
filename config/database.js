import { Sequelize } from "sequelize";

const db = new Sequelize("notes_db", "root", "gitabackend", {
    host: "34.16.105.98",
    dialect: "mysql"

})

export default db;
