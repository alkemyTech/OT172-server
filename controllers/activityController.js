
const { Activities } = require("../models");

const createActivity = async (req, res) => {
  try {
    const { name, image, content } = req.body;
    const create = await Activities.create({
      name,
      image,
      content,
    });
    if (!create) {
      return res.status(402).json({
        created: false,
        msg: "Something got wrong while creating the activity.",
      });
    }
    res.status(200).json({
      created: true,
      msg: "Activity created successfully!",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateActivity = async (req, res) => {
  let id = req.params.id;
  try {
    const activity = await Activities.update(req.body, { where: { id: id } });
    res.status(200).send({ id: activity, message: "updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createActivity,
  updateActivity,
};

