const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async store(req, res) {
    const user = await User.create(req.body);
    
    return res.json(user);
  },
  async show(req, res) {//show all users in db
    const users = await User.find({})
    return res.json(users);
  },
};