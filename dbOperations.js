// A module for accessing POSRGRESQL
// =================================

// EXTERNAL LIBRARIES
//-------------------

//Library for handling dotenv
const dotenv = require('dotenv')
dotenv.config();

//Class for creating PG-pool objects using PG
const Pool = require('pg').Pool



//SETTINGS
// --------



// Read environment variables from .env
const HOST = process.env.POSTGRESQL_HOST
const PORT = process.env.POSTGRESQL_USER_PORT
const DATABASE= process.env.POSTGRESQL_DB
const USER = process.env.POSTGRESQL_USER
const PASSWORD = process.env.POSTGRESQL_USER_PASSWORD

// Database connection settings
const connection = {
    host: HOST,
    port: PORT,
    database: DATABASE,
    user: USER,
    password: PASSWORD
};

// Create a new Pool object for queries
const pool = new Pool(connection);

// DATABASE OPERATIONS 
//--------------------

// Get all rows from table kontti
const getContainerData = async () => {
    let quary = 'SELECT * FROM public.kontti';
    let resultset = await pool.query(quary);
    return resultset; 

};

module.exports = {getContainerData}
