const express = require("express");
const { Topic } = require("../../db/models");

const topicRouter = express.Router();

topicRouter.get("/", async (req, res) => {
  try {
    const data = await Topic.findAll();
    res.status(200).json(data);
  } catch ({ message }) {
    console.log(message);
    res.status(408).json({ message });
  }
});

// topicRouter.get("/favor", async (req, res) => {
//   try {
//     const data = await Topic.();
//     res.status(200).json(data);
//   } catch ({ message }) {
//     console.log(message);
//     res.status(408).json({ message });
//   }

//   try {
//     // const teacher = await Teacher.findByPk(req.params.id);
//     // console.log("---@@@@@@@@@@--> teacher", teacher);
//     const groupsTeasher = await TeacherGroup.findAll({
//       where: { teacherId: req.params.id },
//       include: { model: Group , attributes:['group']},
//     });
//     // console.log("---%%%%%%%%%%--> groups", groupsTeasher);
//     res.status(200).json(groupsTeasher);
//   } catch ({ message }) {
//     res.status(400).json({ message });
//   }

// });
module.exports = topicRouter;
