const express = require("express");
const { User, Group, TeacherGroup, Teacher } = require("../../db/models");
const { Op } = require("sequelize");
const e = require("express");

const adminRouter = express.Router();

adminRouter.get("/", async (req, res) => {
  try {
    const data = await User.findAll({
      include: {
        model: Group,
      },
      order: [
        ["name", "ASC"], 
      ],
    });
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

adminRouter.get("/groups", async (req, res) => {
  try {
    const data = await Group.findAll();
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});


adminRouter.post("/", async (req, res) => {
  try {
    const groupNamesToFind = req.body.Groups.map((el) => el.name);
    const groups = await Group.findAll({
      attributes: ['id', 'group'],
      where: {
        group: {
          [Op.in]: groupNamesToFind,
        },
      },
    });

    const groupss = groups.map((el) => el.dataValues);

    for (let i = 0; i < req.body.Groups.length; i++) {
      req.body.Groups[i].id = groupss[i].id;
    }

    const trueGroups = req.body.Groups.filter((el) => el.manages === true);

    console.log(trueGroups);

    // Assuming TeacherGroup has a model associated with it
    await TeacherGroup.destroy({
      where: {
        teacherId: req.body.id,
      },
    });

    const createTeacherGroupRows = async () => {
      const createPromises = trueGroups.map(async (el) => {
        if (el.manages) {
          await TeacherGroup.create({
            teacherId: req.body.id,
            groupId: el.id,
          });
        }
      });

      await Promise.all(createPromises);
    };

    await createTeacherGroupRows();

    res.status(200).json({ message: 'Operation successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

adminRouter.delete("/:id", async (req, res) => {
  try{
  await TeacherGroup.destroy({ where: { teacherId: req.params.id } });
  await Teacher.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
  }
  catch(error){
    res.status(500).console.log(error)
  }
});

adminRouter.get("/groups", async (req, res) => {
  try {
    const data = await Group.findAll();
    // console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", data);
    res.status(200).json(data);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});



module.exports = adminRouter;