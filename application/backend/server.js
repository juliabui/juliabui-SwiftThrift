const express = require("express");
const app = express();
const path = require("path");
const { pool, connectToDatabase } = require("./database/connection");

const listingsRoutes = require('./routes/listings');

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "../frontend/public")));

// Set up EJS for SSR
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"../frontend/views"));

// Use API routes
app.use('/api', listingsRoutes);

// Home route (renders index.ejs)
app.get("/", (req, res) => {
  res.render("index", { title: "Swift Thrift - SFSU Student Marketplace" });
});

// About Page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public', 'about.html'));
});

// Ty's page
app.get('/about/ty', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public', 'ty.html'));
});

// Eugenio's page
app.get('/about/eugenio', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public', 'eugenio.html'));
});

// Julia's page
app.get('/about/julia', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public', 'julia.html'));
});

// Michael's page
app.get('/about/michael', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public', 'michael.html'));
});

// Prince's page
app.get('/about/princec', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public', 'prince.html'));
});

// Start the server with database connection
const startServer = async () => {
  try {
    // Connect to database first
    // Uncomment this when you're ready to connect to the database
    connectToDatabase();
  
    // Then start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => 
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

// Run the server
startServer();