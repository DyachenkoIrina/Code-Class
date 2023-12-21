const express = require("express");
const { User } = require("../../db/models");
const {
  Group,
  TeacherGroup,
  Homework,
  Task,
  Topic,
} = require("../../db/models");

const teacherRouter = express.Router();

teacherRouter.get("/:id", async (req, res) => {
  try {
    // const teacher = await Teacher.findByPk(req.params.id);
  
    const groupsTeasher = await TeacherGroup.findAll({
      where: { teacherId: req.params.id },
      include: { model: Group, attributes: ["group"] },
    });
  
    res.status(200).json(groupsTeasher);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

teacherRouter.get("/student/:id", async (req, res) => {
  try {
    const data = await User.findAll({
      where: { role: "Student", groupId: req.params.id },
    });
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

teacherRouter.get("/studentid/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await User.findByPk(id);
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

teacherRouter.get("/studentid/:id/homework", async (req, res) => {
  const userId = req.params.id;

  try {
    // Find the user by ID
    const user = await User.findByPk(userId, {
      include: [
        {
          model: Homework,
          include: [
            {
              model: Task,
              include: [
                {
                  model: Topic,
                  attributes: ["title", "img", "description", "complexity"],
                },
              ],
            },
          ],
        },
      ],
    });
    console.log("------>chto priidet", user);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Access the topics associated with the user through Homework -> Task -> Topic
    const topics = user.Homework.reduce((acc, homework) => {
      if (homework.Task && homework.Task.Topic) {
        acc.push(homework.Task.Topic);
      }
      return acc;
    }, []);

    // Do something with the retrieved data (e.g., send it as a response)
    res.json({ user, topics });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = teacherRouter;
