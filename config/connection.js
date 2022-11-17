import {createPool} from "mysql2/promise";
import config from "./config.js";

const connection=createPool({
    host:config.host,
    database:config.database,
    user:config.user,
    password:config.password,
    port:config.DB_port
});

const getConnection=()=>{
    return connection;
}

export{
    getConnection
};