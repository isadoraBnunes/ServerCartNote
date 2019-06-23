const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    email: {
        type: Number, required: true
    },
});

mongoose.model('User', UserSchema);