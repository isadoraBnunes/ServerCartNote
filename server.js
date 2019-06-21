const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors()) 


mongoose
  .connect(
    'mongodb+srv://isadora:cartnote@cluster0-kcs6o.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

requireDir('./src/models');
app.use('/api', require('./src/routes.js'));

app.listen(3000);