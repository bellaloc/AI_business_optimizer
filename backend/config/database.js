// database.js

const mysql = require('mysql2'); // Import mysql2 package
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = require('./constants');

function connectDatabase() {
    const connection = mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL database:', err);
            return;
        }
        console.log('Connected to MySQL database');
    });

    return connection;
}

module.exports = connectDatabase;
