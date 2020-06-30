const Pool = require('pg').Pool;
const db = new Pool({
    database: 'persistent_db',
    user: 'persistent_app',
    password: '123',
    host: 'localhost', 
    port: 5433
});

module.exports = db;