const express = require("express");
const bcrypt = require("bcrypt");
const { Teacher } = require("../../db/models");
const generateTokens = require("../utils/generateTokens");
const jwtConfig = require("../config/jwtConfig");
const cookiesConfig = require("../config/cookiesConfig");

const teacherRouter = express.Router();

// teacherRouter.get("/", async (req, res) => {
//   try {
//     const data = await Teacher.findAll();
//     console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', data)
//     res.status(200).json(data);
//   } catch ({ message }) {
//     res.status(400).json({ message });
//   }
// });

// teacherRouter.get("/students/:id", async (req, res) => {
//   try {
//     const data = await User.findAll({
//       where: { role: "Student", groupId: req.params.id },
//     });
//     res.status(200).json(data);
//   } catch ({ message }) {
//     res.status(400).json({ message });
//   }
// });

// teacherRouter.get("/studentid/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const data = await User.findByPk(id);
//     res.status(200).json(data);
//   } catch ({ message }) {
//     res.status(400).json({ message });
//   }
// });
module.exports = teacherRouter;
