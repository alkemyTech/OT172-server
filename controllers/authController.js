const bcrypt = require('bcrypt');
const { User } = require('../models');
const {createAccessToken} = require('../auth/jwt')

module.exports = {
  async login(req, res) {

    try {
      const { email, password } = req.body;
      console.log(`User [${email}] is trying to login`);
      const user = await User.findOne({ where: { email: email } });

      if (!user) {
        console.log(`User ${email} does not exist`);
        res.status(404).json({ ok: false });
      } else {
        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (passwordsMatch) {
          const { password, ...sentData } = user.dataValues;

          // Create Token
          const token = createAccessToken({
            userId: user.id,
            email: user.email,
            name:user.lastName
          });

          console.log(`User [${email}] login was successful`);
          res.status(200).json({
            token,
            user: sentData
          });
        } else {
          console.log(`User [${email}] provided wrong credentials`);
          res.status(401).json({ ok: false });
        }
      }
    } catch (err) {
      console.log(`Something wrong. Error [${err.message}]`);
      res.status(500).json({ error: err.message });
    }
  }
};
