const { Testimony } = require("../models");

module.exports = {
  async postTestimony(req, res) {
    try {
      const { name, image, content } = req.body;
      await Testimony.create({
        name,
        image,
        content,
      });
      res.status(200).send("Testimony created");
    } catch (error) {
      res.status(500).send(error);
      console.error(error);
    }
  },
};
