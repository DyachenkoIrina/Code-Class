const express = require("express");
const { Task } = require("../../db/models");

const getnewtaskRouter = express.Router();

getnewtaskRouter.post("/", async (req, res) => {
  try {
    const { title, questions, answer } = req.body;
    console.log(req.body);
    const newTask = await Task.create({ title, questions, answer });
    console.log("newtask--->", newTask);
  } catch (error) {
    console.log(error);
    res.status(407).json(error);
  }
});

module.exports = getnewtaskRouter;
