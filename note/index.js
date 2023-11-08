
const express = require('express');
const { randomBytes } = require('crypto');

const bodyParser = require('body-parser');


const app = express();
app.use(express.json());
app.use(bodyParser.json());

const noteById = {}

app.get('/story/:id/note', (req, res) => {
  res.send(noteById[req.params.id] || []);
});

app.post('/story/:id/note', (req, res) => {
  const noteId = randomBytes(4).toString('hex');
  const { content } = req.body;

  const note = noteById[req.params.id] || [];
  note.push({ id: noteId, content });
  noteById[req.params.id] = note;
  res.status(201).send(note);
});

app.listen(4001, () => {
  console.log('4001...');
});
