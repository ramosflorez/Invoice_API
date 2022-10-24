import {config} from "dotenv";
config();// pone a disposición las variables del archivo .env
export default{
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.password,
    database:process.env.DATABASE,
    port:process.env.port
}