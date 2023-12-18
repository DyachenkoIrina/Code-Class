const express = require("express");
const { Topic } = require("../../db/models");

const topicRouter = express.Router();

topicRouter.get("/", async (req, res) => {
  try {
    const data = await Topic.findAll();
    res.status(200).json(data);
  } catch ({ message }) {
    console.log(message);
    res.status(408).json({ message });
  }
});
module.exports = topicRouter;
