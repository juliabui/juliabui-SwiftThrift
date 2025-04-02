const { pool } = require('./connection');

/*
  Only an example method on how a query works from the database.
  Doesn't apply to our schema or will work.
  
*/
const getPersonById = async (personId) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM Persons WHERE PersonID = ?', 
      [personId]
    );
    console.log(rows);

  } catch (error) {
    console.error('Error getting person:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Get all categories for dropdown
const getCategories = async () => {
  const [rows] = await pool.query('SELECT id, name FROM categories ORDER BY name');
  return rows;
};

// Search listings by category and/or text query
const searchListings = async (category, query) => {
  // Base query
  let sql = `
    SELECT 
      l.id, 
      l.name, 
      l.description, 
      l.price, 
      l.status,
      l.created_at,
      u.firstName AS seller_firstName,
      u.lastName AS seller_lastName,
      MIN(p.filePath) AS primary_image
    FROM 
      listings l
    INNER JOIN 
      users u ON l.seller_id = u.id
    LEFT JOIN 
      pictures p ON l.id = p.listing_id
  `;
    
  const joins = [];
  if (category && category !== '') {
    joins.push(`INNER JOIN listings_belong_to_categories lbc ON l.id = lbc.listing_id`);
  }
  
  if (joins.length > 0) {
    sql += joins.join(' ');
  }

  // WHERE conditions
  const whereConditions = [];
  const params = [];
  
  // Only show active listings
  whereConditions.push("l.status = 'active'");
  
  // Add category filter if provided
  if (category && category !== '') {
    whereConditions.push("lbc.category_id = ?");
    params.push(category);
  }
  
  // Add text search if provided
  if (query && query !== '') {
    whereConditions.push("(l.name LIKE ? OR l.description LIKE ?)");
    const searchTerm = `%${query}%`;
    params.push(searchTerm, searchTerm);
  }
  
  // Add WHERE clause
  if (whereConditions.length > 0) {
    sql += " WHERE " + whereConditions.join(" AND ");
  }
  
  // For handling multiple pictures
  sql += " GROUP BY l.id";
  
  // Order by newest first
  sql += " ORDER BY l.created_at DESC";
  
  const [rows] = await pool.query(sql, params);
  return rows;
};

// Get all listings when no search parameters
const getAllListings = async () => {
  const sql = `
    SELECT 
      l.id, 
      l.name, 
      l.description, 
      l.price, 
      l.status,
      l.created_at,
      u.firstName AS seller_firstName,
      u.lastName AS seller_lastName,
      MIN(p.filePath) AS primary_image
    FROM 
      listings l
    INNER JOIN 
      users u ON l.seller_id = u.id
    LEFT JOIN 
      pictures p ON l.id = p.listing_id
    WHERE 
      l.status = 'active'
    GROUP BY 
      l.id
    ORDER BY 
      l.created_at DESC
  `;
  
  const [rows] = await pool.query(sql);
  return rows;
};

module.exports = {
  getPersonById,
  getCategories,
  searchListings,
  getAllListings
};

