const express = require("express");
const { User } = require("../../db/models");
const { Group, Teacher, TeacherGroup } = require("../../db/models");

const teacherRouter = express.Router();


teacherRouter.get("/:id", async (req, res) => {
  try {
    // const teacher = await Teacher.findByPk(req.params.id);
    // console.log("---@@@@@@@@@@--> teacher", teacher);
    const groupsTeasher = await TeacherGroup.findAll({
      where: { teacherId: req.params.id },
      include: { model: Group , attributes:['group']},
    });
    console.log("---%%%%%%%%%%--> groups", groupsTeasher);
    res.status(200).json(groupsTeasher);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

teacherRouter.get("/students/:id", async (req, res) => {
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
module.exports = teacherRouter;
