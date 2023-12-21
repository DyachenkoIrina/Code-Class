const express = require("express");
const { User, Topic, GetTopic } = require("../../db/models");

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
topicRouter.post("/studenttopics", async (req, res) => {
  try {
    const { id } = req.body;
    // console.log("55555555555555", id, req.body);
    // const data = await User.findAll({include:{model:Topic}} );
    const topics = await Topic.findAll({
      include: {
        model: GetTopic,
        where: {
          userId: id,
        },
      },
    });
    console.log("%%%%%%%%%%user------>", topics);
    res.status(200).json(topics);
  } catch ({ message }) {
    console.log(message);
    res.status(408).json({ message });
  }
});

topicRouter.get("/:id", async (req, res) => {
  // console.log("---------->forUser", req.params);

  try {
    const { id } = req.params;
    const data = await GetTopic.findAll({ where: { userId: id } });
    // console.log("****", data);
    res.status(200).json(data);
  } catch ({ message }) {
    console.log(message);
    res.status(408).json({ message });
  }
});

topicRouter.post("/forUser/:id", async (req, res) => {
  // console.log("--->forUserfavorite", req.params);
  // console.log("--->f!!!!orUserfavorite", req.body);
  try {
    const userId = req.params.id;
    const { id } = req.body;

    const data = await GetTopic.create({ userId, topicId: id });

    // console.log("filtertopic---->", data);
    res.status(200);
  } catch ({ message }) {
    console.log(message);
    res.status(400).json({ message });
  }
});

module.exports = topicRouter;
