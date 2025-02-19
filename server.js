const express = require("express");
const app = express();
const path = require("path");

// Serve static files (CSS, JS, images)
app.use(express.static("public"));

// Set up EJS for SSR
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home route (renders index.ejs)
app.get("/", (req, res) => {
    res.render("index", { title: "[Insert title later]" });
});

// Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
