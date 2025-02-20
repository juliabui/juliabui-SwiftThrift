const express = require("express");
const app = express();
const path = require("path");

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Set up EJS for SSR
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home route (renders index.ejs)
app.get("/", (req, res) => {
    res.render("index", { title: "[Insert title later]" });
});

// About Page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Ty's page
app.get('/about/ty', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ty.html'));
});

// Eugenio's page
app.get('/about/eugenio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'eugenio.html'));
});

// Julia's page
app.get('/about/julia', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'julia.html'));
});

// Michael's page
app.get('/about/michael', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'michael.html'));
});

// Prince's page
app.get('/about/princec', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'prince.html'));
});


// Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
