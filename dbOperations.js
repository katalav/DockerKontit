// A module for accessing POSRGRESQL
// =================================

// EXTERNAL LIBRARIES
//-------------------

//Class for creating PG-pool objects using PG
const Pool = require('pg').Pool

// Database connection settings
const connection = {
    host: '127.0.0.1',
    port: '5434',
    database: 'kontit',
    user: 'postgres',
    password: 'Q2werty7',
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
