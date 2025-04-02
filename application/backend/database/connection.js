const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  // Remember to create your .env file with these values
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER, 
  password: process.env.DB_PASSWORD,
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

// Helper function to execute queries
const query = async (sql, params) => {
  try {
    const [results] = await pool.execute(sql, params);
    return results;
  } catch (error) {
    console.error('Query error:', error);
    throw error;
  }
};

module.exports = { pool, connectToDatabase, query };
