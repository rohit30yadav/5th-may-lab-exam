const express = require("express");
const path = require("path");

const app = express();

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static folder
app.use(express.static("public"));

// Sample Data
const students = [
  { name: "Aman", marks: 80 },
  { name: "Riya", marks: 45 },
  { name: "John", marks: 60 }
];

// Route
app.get("/", (req, res) => {
  res.render("index", { students });
});

// Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});