const pool = require('./pool');

async function testDb() {
    const queryText = 'SELECT NOW()';

    try {
        const res = await pool.query(queryText);
        console.log("Connected to db! Current time: ", res.rows[0]);
    } catch (error) {
        console.error(error.stack);
    } finally {
        pool.end();
    }
}


module.exports = testDb;