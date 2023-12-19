const express = require("express");
const { Group, TeacherGroup, Teacher } = require("../../db/models");

const groupRouter = express.Router();

groupRouter.get("/", async (req, res) => {
  console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ")
  try {
    const data = await Teacher.findAll({
      include: {
        model: Group,
      },
      order: [
        ['name', 'ASC'], // Sort by teacher's name in ascending order
      ],
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = groupRouter;
