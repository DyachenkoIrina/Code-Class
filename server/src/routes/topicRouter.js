const express = require("express");
const { Topic } = require("../../db/models");

const topicRouter = express.Router();

topicRouter.get("/", async (req, res) => {
  try {
    const data = await Topic.findAll();
    console.log('----RouterTopic--->', data)
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});
module.exports = topicRouter;