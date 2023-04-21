const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xoqhd@!135',
    database: 'mytdl'
});

module.exports = db;