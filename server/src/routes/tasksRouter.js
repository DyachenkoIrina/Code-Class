const express = require("express");
const { Task } = require("../../db/models");

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
    const note = await Task.create({
      title,
      questions,
      answer,
    });
    res.status(201).json(note);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = tasksRouter;
