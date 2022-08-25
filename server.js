const express = require('express');
const app = express();
const port = 4200;

const path = require('path');
const fs = require('fs');

let rawData = fs.readFileSync('people.json');
let people = JSON.parse(rawData);

app.get('/api/people', (req, res) => {
  res.send(people);
});

app.get('/api/people/:username', (req, res) => {
  var username = req.params.username;
  var searchResult = people.filter(x => x.login.username === username);
  if (searchResult.length === 0) {
    res.sendStatus(404);
  }
  res.send(searchResult[0]);
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})