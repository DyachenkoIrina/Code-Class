const express = require("express");
const { Homework } = require("../../db/models");

const homeworkRouter = express.Router();

homeworkRouter.get("/", async (req, res) => {
  try {
    const data = await Homework.findAll();

    res.status(200).json(data);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

module.exports = homeworkRouter;
