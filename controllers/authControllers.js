const bcrypt = require('bcryptjs');
const User = require('../modules/User')

const authControllers = {
  //Register
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSaltSync(10);
      const hashed = bcrypt.hashSync(req.body.password, salt)
      
      //Create new User
      const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashed
      });
      
      //Save to DB
      const user = await newUser.save();
      res.status(200).json(user);
    } catch(err) {
      res.status(500).json(err);
    }
  }
}

module.exports = authControllers;