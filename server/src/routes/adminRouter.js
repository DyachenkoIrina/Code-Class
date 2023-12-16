const express = require("express");
const { User, Group } = require("../../db/models");

const adminRouter = express.Router();

adminRouter.get("/", async (req, res) => {
    try {
        const data = await User.findAll({
          include: {
            model: Group          },
        });
        res.status(200).json(data);
      } catch ({ message }) {
    res.status(400).json({ message });
  }
});


module.exports = adminRouter;