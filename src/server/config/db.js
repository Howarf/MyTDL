const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'mytdl'
});

module.exports = db;
