import mysql from "mysql2";

const dbport = 3301;
const dbhost = "localhost";
const dbname = "SOEN341_Project";
const dbuser = "root";
const dbpass = "";

const dbpool = mysql.createPool({
  host: dbhost,
  port: dbport,
  user: dbuser,
  database: dbname,
  password: dbpass,
});

export default dbpool;
