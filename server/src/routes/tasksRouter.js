const express = require("express");
const { Homework, Task } = require("../../db/models");

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
    const { studentWork, user } = req.body;

    if (!studentWork) {
      return res
        .sendStatus(400)
        .json({ message: "Text is required in the request body!!!!!" });
    }

    const createdHomework = await Homework.create({
      checkWork: studentWork,
      // status: "Pending",
      userId: user.id,
    });

    // console.log("----createdHomework---->", createdHomework);
    return res.sendStatus(201);
  } catch (error) {
    console.error("Error:", error);

    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

module.exports = tasksRouter;
