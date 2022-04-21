const { Activity } = require("../models");

const createActivity = async (req, res) => {
  try {
    const activity = Activity.build(req.body);

    const create = activity.save();

    if (!create) {
      return res.status(402).json({
        ok: false,
        msg: "Something got wrong while creating the activity.",
      });
    }

    res.status(200).json({
      ok: true,
      msg: "Activity created successfully!",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateActivity = async (req, res) => {
  let id = req.params.id;
  try {
    const activity = await Activity.update(req.body, { where: { id: id } });
    res.status(200).send(activity);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createActivity,
  updateActivity,
};
