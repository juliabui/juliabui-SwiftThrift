/*
  Creating and dropping the table 
*/

const CREATE_USERS = `
CREATE TABLE IF NOT EXISTS Users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  SFSU_id INT UNIQUE NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role INT DEFAULT 0,
  perms INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
)
`

const DROP_USERS = `
DROP TABLE IF EXISTS Users
`

/*
  Modifying the table
*/

const ADD_USER = `
INSERT INTO Users 
WHERE (SFSU_id, firstName, lastName, email, password) 
VALUES (?,?,?,?,?)
`

const DELETE_USER = `
DELETE FROM Users 
WHERE SFSU_id = ? AND user_id = ?
`

const CHANGE_USER_PERMS = `
UPDATE Users 
SET perms = ? 
WHERE SFSU_id = ?
`







