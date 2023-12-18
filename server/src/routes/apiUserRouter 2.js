const sharp = require("sharp");
const fs = require("fs/promises");
const express = require("express");
const { User } = require("../../db/models");
const { upload } = require("../middlewares/multer");

const apiUsersRouter = express.Router();

apiUsersRouter
  .route("/:id")
  .post(upload.single("profileImage"), async (req, res) => {
    try {
      const user = await User.findByPk(req.body.id);

      let { profileImage } = user;
      if (req.file) {
        profileImage = `${Date.now()}.webp`;
        const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
        await fs.writeFile(`./public/img/${profileImage}`, outputBuffer);
        // await fs.unlink(`./public/img/${user.profileImage}`);
      }
      const { name, email } = req.body;
      await user.update({ name, email, profileImage });
      const updatedUser = await User.findByPk(user.id);

      res.status(201).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = apiUsersRouter;
