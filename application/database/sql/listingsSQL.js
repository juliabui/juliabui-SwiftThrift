/*
  Creating and dropping the table 
*/

const CREATE_LISTINGS = `
CREATE TABLE IF NOT EXISTS Listings (
  listing_id INT AUTO_INCREMENT PRIMARY KEY,
  seller_id INT NOT NULL,
  name VARCHAR(75) NOT NULL,
  description TEXT(800) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  status VARCHAR(255) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (seller_id) REFERENCES Users(user_id)
  ON DELETE CASCADE ON UPDATE CASCADE
)
`

const DROP_LISTINGS = `
DROP TABLE IF EXISTS Listings
`

/*
  Modifying the table
*/

const ADD_LISTING = `
INSERT INTO Listings 
WHERE (seller_id, name, description, price) 
VALUES (?,?,?,?)
`

const DELETE_LISTING = `
DELETE FROM Listings
WHERE seller_id = ? AND listing_id = ?
`

const CHANGE_LISTING_INFO = `
UPDATE Listings
SET name = ?, description = ?, price = ?
WHERE listing_id = ?
`

const CHANGE_LISTING_STATUS = `
UPDATE Listings
SET status = ?
WHERE listing_id = ?
`