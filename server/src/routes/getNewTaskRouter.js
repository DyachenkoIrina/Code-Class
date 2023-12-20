const express = require("express");
const { Task, Topic } = require("../../db/models");

const getnewtaskRouter = express.Router();

getnewtaskRouter.post("/", async (req, res) => {
  try {
    const { title, questions, answer } = req.body;
    // console.log(req.body);
    const topic = await Topic.findOne({where:{title}})

    if (!topic) {
      return res.status(404).json({ success: false, message: "Тема не найдена" });
    }
    const newTask =  await Task.create({ title, questions, answer, topicId: topic.id });
    res.status(200).json({ success: true, task: newTask });
  } catch (error) {
    console.log(error);
    res.status(407).json(error);
  }
});

module.exports = getnewtaskRouter;
