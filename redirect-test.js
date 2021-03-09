const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!');
});

app.get('/api', (req, res) => {
  res.redirect(301, 'https://swapi.dev/api/planets/1/');
});


app.listen(3000, () => {
  console.log('server started');
});