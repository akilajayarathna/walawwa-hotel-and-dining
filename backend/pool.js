const { Pool } = require('pg');

require('dotenv').config();

const pool = new Pool(
    {
        user: processs.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        connectionTimeoutMillis: 2000
    }
);

module.exports = pool;