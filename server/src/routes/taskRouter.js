const express = require("express");
const { Task } = require("../../db/models");

const teacherRouter = express.Router();

teacherRouter.get("/", async (req, res) => {
  try {
    const data = await Task.findAll();
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});
