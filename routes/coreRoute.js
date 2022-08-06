const express = require("express");

const router = express.Router();

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

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Returns all articles
 *     tags: [Articles]
 *     description: Returns all the persisted articles.
 *     responses:
 *       '200':
 *         description: 'Sucessfully fetched all articles.'
 *         content:
 *           application/json
 */

router.get("/", (req, res) => {
  res.status(200).json({
    status: "Success!",
    articles: articles,
  });
});

module.exports = router;
