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

homeworkRouter.post("/", async (req, res) => {
  try {
    const { studentWork, user, task } = req.body;

    if (!studentWork) {
      return res
        .status(400)
        .json({ message: "Text is required in the request body!!!!!" });
    }
    if (!user) {
      return res.status(400).json({ message: "нет userId!" });
    }
    if (!task) {
      return res.status(400).json({ message: "нет taskId!" });
    }

    await Homework.create({
      checkWork: studentWork,
      status: "Pending",
      taskId: task,
      userId: user.id,
    });

    return res.sendStatus(201);
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});


module.exports = homeworkRouter;
