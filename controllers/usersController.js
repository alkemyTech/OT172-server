const { User } = require('../models');

module.exports = {

  
 async updateUser (req, res) {
   console.log('### 1',req.user);
   console.log('### 2',req.body);
    try {
      const user = await User.findByPk(req.params.id);
      // console.log('### 1', user);
      if (user) {
        

        // Si hay user chequear admin y editar
        console.log(user);
        // await user.save();

        const { password, ...sentValues } = user.dataValues; // exclude password
        res.status(200).json(sentValues);
      } else {
        res.status(404).json({ error: 'User not found' })
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
