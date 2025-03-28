require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME || 'csc648',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password' //change password to your own mysql one
});

// Function to initialize database connection
const connectToDatabase = async () => {
    try {
      const connection = await pool.getConnection();
      connection.release();
      console.log('Database connected successfully');
      return true;
    } catch (error) {
      console.error('Database connection error:', error);
      throw error;
    }
  };

module.exports = { pool, connectToDatabase };