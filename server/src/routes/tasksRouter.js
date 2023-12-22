const express = require("express");

const { Task, Topic } = require("../../db/models");

const tasksRouter = express.Router();

tasksRouter.get("/", async (req, res) => {
  try {
    const data = await Task.findAll();
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

tasksRouter.post("/", async (req, res) => {
  try {
    const { title, questions, answer } = req.body;
    console.log("reqbod--->", req.body);


    const topic = await Topic.findByPk(title); 
    console.log("topic", topic);
    if (!topic) {
      return res
        .status(404)
        .json({ success: false, message: "Тема не найдена" });
    }
    const newTask = await Task.create({
      title,
      questions,
      answer,
      topicId: topic.id,
    });
    console.log("server newTask", newTask);
    res.status(200).json({ success: true, task: newTask });
  } catch (error) {
    console.log(error);
    res.status(407).json(error);
  }
});

module.exports = tasksRouter;
