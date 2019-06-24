const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async store(req, res) {
    const user = await User.create(req.body);
    
    return res.json(user);
  }
};