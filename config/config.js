import {config} from "dotenv";
config();// pone a disposición las variables del archivo .env
export default{
    host:process.env.HOST || process.env.DB_HOST ,
    user:process.env.USER ||process.env.DB_USER ,
    password:process.env.PASSWORD ||process.env.DB_PASSWORD ,
    database:process.env.DATABASE ||process.env.DB_DATABASE ,
    port:process.env.DB_puerto ||process.env.DB_PORT
}
console.log("host:",process.env.DB_HOST)
console.log("user:",process.env.DB_USER)
console.log("password:",process.env.DB_PASSWORD)
console.log("database:",process.env.DB_DATABASE)
console.log("port:",process.env.DB_PORT)