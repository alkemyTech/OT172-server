const { User } = require('../models');
const createAccessToken = require('../auth/jwt')

module.exports = {
 async updateUser (req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        Object.entries(req.body).forEach((item) => {
          const [key, value] = item;
          // user only update these fields
          if (['firstName', 'lastName', 'email', 'image'].includes(key)) {
            user[key]=value
          }
        })        

        if (req.user?.roleId === 1 && req.body.roleId) {
          user.roleId = req.body.roleId; // user admin and self only can edit role.
        }

        await user.save();
        const { password, ...sentValues } = user.dataValues;

        // Create Token
        const token = createAccessToken({
          userId: sentValues.id,
          email: sentValues.email
        });
        console.log(`User [${sentValues.email}] token was reset successful`)
        res.status(200).json({
          token,
          user: sentValues
        })
      } else {
        res.status(404).json({ error: 'User not found' })
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
