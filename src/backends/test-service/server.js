const express = require('express');
const mongoose = require('mongoose');

const CatModel = mongoose.model('Cat', { name: String });

mongoose.connect('mongodb://mongodb:27017')
.then(() => {
  console.log('MongoDB connection successful!');
  const kitty = new CatModel({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));
});

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
 res.send('Hello World!');
});

app.get('/cats/:query', (req, res) => {
  CatModel.find({ name: { $regex: new RegExp(`${req.params.query}`), $options: 'i' }}, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);