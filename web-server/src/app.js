const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

// Functionalities provided by wrapper class that gets created when we run the application
// console.log(__dirname)
// console.log(__filename)

// Instead, we can use core node module: path
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
console.log(publicDirectoryPath);
const viewsDirectoryPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and view location
app.set("view engine", "hbs");
app.set("views", viewsDirectoryPath);

// Setup partial views
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Index page handled by hbs
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Its me!",
  });
});

// About page handled by hbs
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page!",
    name: "Its me!",
  });
});

// Help page handled by hbs
app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text!",
    title: "Help Page!",
    name: "Its me!",
  });
});

// This is now handled by index.html
// app.get("", (req, res) => {
//   res.send("Root page!");
// });

// This is now handled by help.html
// app.get("/help", (req, res) => {
//   res.send("Help page!");
// });

// Respond with HTML
// This is now handled by about.html
// app.get("/about", (req, res) => {
//   res.send("<h1>About</h1>");
// });

// Match any path starting with help
app.get("/help/*", (req, res) => {
  res.render("pageNotFound", {
    text: "Help article not found",
    title: "Help Page!",
    name: "Its me!",
  });
});

// Match any path except the ones that are already caught up from the beginning
app.get("*", (req, res) => {
  res.render("pageNotFound", {
    text: "Oops! Page not found",
    title: "Help Page!",
    name: "Its me!",
  });
});

// JSON Response
// However, its converted to string by express
app.get("/weather", (req, res) => {
  res.send({
    forecast: "Heat",
    location: "India",
  });
});

app.listen(3000, () => {
  console.log("App started at port 3000!");
});
