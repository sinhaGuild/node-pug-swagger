require("colors");
require("dotenv").config();
const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4001;

const app = express();

/** Middleware */
app.use(express.json());
app.use(urlencoded({ extended: false }));

/** Load a view engine */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/** Routes */
app.get("/", (req, res) => {
  const articles = [
    {
      id: 1,
      title: "Picassos Blue Period",
      author: "Picasso, 1792",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio deserunt maiores fuga architecto odio adipisci nulla consectetur explicabo, omnis esse iure, eaque quibusdam deleniti.",
    },
    {
      id: 3,
      title: "Caravaggios Dream",
      author: "Caravagio, 1780",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio deserunt maiores fuga architecto odio adipisci nulla consectetur explicabo, omnis esse iure, eaque quibusdam deleniti.",
    },
    {
      id: 2,
      title: "Sorolla Beaches",
      author: "Sorolla, 1876",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio deserunt maiores fuga architecto odio adipisci nulla consectetur explicabo, omnis esse iure, eaque quibusdam deleniti.",
    },
  ];

  res.render("index", {
    title: "Index.js",
    status: `Server is listening on PORT ${PORT}...`,
    articles: articles,
  });
});

app.get("/articles/add", (req, res) => {
  res.render("add_article", {
    title: "Add Article",
  });
});

/** Start the server */
app.listen(PORT, () =>
  console.log(`Server is listening on PORT ${PORT}..`.cyan.italic)
);
