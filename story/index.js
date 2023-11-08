const express = require('express');
const { randomBytes } = require('crypto');


const app = express();
app.use(express.json());

const story = {}

app.get('/story', (req, res) => {

  res.send(story)
});

app.post('/story', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  story[id] = { id, title };
  res.status(201).send(story[id]);

});

app.listen(4000, () => {
  console.log('4000...');
});
