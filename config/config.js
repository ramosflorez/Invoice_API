import {config} from "dotenv";
config();// pone a disposición las variables del archivo .env
export default{
    host:process.env.HOST || process.env.DB_HOST ,
    user:process.env.USER ||process.env.DB_USER ,
    password:process.env.PASSWORD ||process.env.DB_PASSWORD ,
    database:process.env.DATABASE ||process.env.DB_DATABASE ,
    port:process.env.DB_port ||process.env.DB_PORT 
}
console.log(process.env.DB_HOST)