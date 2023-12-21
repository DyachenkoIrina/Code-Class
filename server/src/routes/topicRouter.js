const express = require("express");
const { Topic, GetTopic } = require("../../db/models");

const topicRouter = express.Router();

// topicRouter.get("/", async (req, res) => {
//   try {
//     const data = await Topic.findAll();
//     res.status(200).json(data);
//   } catch ({ message }) {
//     console.log(message);
//     res.status(408).json({ message });
//   }
// });

topicRouter.get("/:id", async (req, res) => {
  try {
    console.log("<>-----<>", req.params);
    const id = req.params;
    const data = await GetTopic.findAll({
      where: {
        userId: id,
      },
    });
    res.status(200).json(data);
  } catch ({ message }) {
    console.log(message);
    res.status(408).json({ message });
  }
});

topicRouter.post("/forUser/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const taskId = req.body.id;
    const data = await GetTopic.create({ userId, taskId });

    res.status(200);
  } catch ({ message }) {
    console.log(message);
    res.status(400).json({ message });
  }
});

module.exports = topicRouter;
