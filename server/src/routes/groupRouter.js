const express = require("express");
const { Group } = require("../../db/models");

const groupRouter = express.Router();

groupRouter.get("/", async (req, res) => {
  try {
    const data = await Group.findAll();
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});
module.exports = groupRouter;