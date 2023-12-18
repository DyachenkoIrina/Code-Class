const express = require("express");
const bcrypt = require("bcrypt");
const { User, Teacher } = require("../../db/models");
const generateTokens = require("../utils/generateTokens");
const jwtConfig = require("../config/jwtConfig");
const cookiesConfig = require("../config/cookiesConfig");
const verifyRefreshToken = require("../middlewares/verifyRefreshToken");

const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    const user = await User.findOne({ where: { email } });
    const teacher = await Teacher.findOne({ where: { email } });

    if (!user && !teacher)
      return res.status(404).json({ message: "User not found" });

    let entity;
    let role;
    if (user) {
      entity = user;
      role = "user";
    } else if (teacher) {
      entity = teacher;
      role = "teacher";
    }

    const isValid = await bcrypt.compare(password, entity.hashpass);
    if (!isValid) return res.status(400).json({ message: "Invalid password" });

    const plainEntity = entity.get();
    delete plainEntity.hashpass;
    const { accessToken, refreshToken } = generateTokens({
      user: plainEntity,
    });

    res
      .cookie(jwtConfig.refresh.name, refreshToken, cookiesConfig.refresh)
      .status(200)
      .json({ accessToken, user: plainEntity, role });
  } catch (error) {
    console.log(error);
    res.status(407).json(error);
  }
});

authRouter.post("/signup", async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { name, hashpass: await bcrypt.hash(password, 10) },
    });
    if (!created)
      return res.status(400).json({ message: "Email already exists" });

    const plainUser = user.get();
    delete plainUser.hashpass;
    const { accessToken, refreshToken } = generateTokens({
      user: plainUser,
    });
    res
      .cookie(jwtConfig.refresh.name, refreshToken, cookiesConfig.refresh)
      .status(200)
      .json({ accessToken, user: plainUser });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

authRouter.get("/logout", (req, res) => {
  res.clearCookie(jwtConfig.refresh.name).sendStatus(200);
});

authRouter.get("/check", verifyRefreshToken, (req, res) => {
  res.json({ user: res.locals.user, accessToken: "" });
});

module.exports = authRouter;
