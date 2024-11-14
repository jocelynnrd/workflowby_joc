// db/connection.js
const { Client } = require('pg');

// Set up database connection
const client = new Client({
    host: 'localhost', // or your DB host
    port: 5432, // default Postgres port
    user: 'your_user',
    password: 'your_password',
    database: 'your_database_name',
});

// Connect to the database once
client.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
    } else {
        console.log('Connected to the database');
    }
});

module.exports = client;

