require("colors");
require("dotenv").config();
const { urlencoded } = require("express");
const express = require("express");
const morgan = require("morgan");
const swui = require("swagger-ui-express");
const path = require("path");
const connectDB = require("./db/mongo");
const PORT = process.env.PORT || 4001;

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

const app = express();

/** Middleware */
app.use(express.json());
app.use(morgan("dev"));

/** Load a view engine for PUG */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
/** Home Route for PUG */
app.get("/", (req, res) => {
  res.render("index", {
    title: "Index.js",
    status: `Server is listening on PORT ${PORT}...`,
    articles: articles,
  });
});

/** Routes */
app.use("/articles", require("./routes/coreRoute"));

/** Docs */
app.use(
  "/docs",
  swui.serve,
  swui.setup(require("./docs/setupSwagger"), { explorer: true })
);

/** Start the server */
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is listening on PORT ${PORT}...`.bgMagenta.bold)
    );
  } catch (error) {
    console.log(`Server failed to start with err ${error}.`.bgRed.bold);
  }
};

start();
