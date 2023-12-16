const express = require("express");
const { Group } = require("../../db/models");
const { User } = require("../../db/models");

const teacherRouter = express.Router();

teacherRouter.get("/", async (req, res) => {
  try {
    const data = await Group.findAll();
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

// teacherRouter.get("/students", async (req, res) => {
//   try {
//     const data = await User.findAll({ where: { role: "Student" } });
//     res.status(200).json(data);
//   } catch ({ message }) {
//     res.status(400).json({ message });
//   }
// });

teacherRouter.get("/students/:id", async (req, res) => {
  try {
    const data = await User.findAll({
      where: { role: "Student", groupId: req.params.id },
    });
    console.log('--->server data', data)
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

// teacherRouter.get("/choisesudent/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const data = await User.findByPk(id);
//     res.status(200).json(data);
//   } catch ({ message }) {
//     res.status(400).json({ message });
//   }
// });
module.exports = teacherRouter;
