const express = require("express");
const { Task } = require("../../db/models");

const taskRouter = express.Router();

taskRouter.get("/", async (req, res) => {
  try {
    const data = await Task.findAll({
      where: {
        topicId: [1, 2],
      },
    });
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

module.exports = taskRouter;
