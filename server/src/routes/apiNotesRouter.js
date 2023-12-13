const express = require("express");
const { Note } = require("../../db/models");

const apiNotesRouter = express.Router();

apiNotesRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const notes = await Note.findAll({
        order: [["createdAt", "DESC"]],
      });
      return res.json(notes);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      if (!req.body?.title)
        return res.status(500).json({ message: "Empty reqbody" });
      const { title, description } = req.body;
      const newNote = await Note.create({
        title,
        description,
      });
      return res.status(201).json(newNote);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

apiNotesRouter.delete("/:id", async (req, res) => {
  await Note.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

apiNotesRouter.put("/:id", async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    await note.update(req.body);
    const newNote = await Note.findByPk(note.id);
    res.json(newNote);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = apiNotesRouter;
