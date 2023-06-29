const express = require('express');
const app = express();
const port = 3000;

app.get('/api/hola', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`La API está escuchando en http://localhost:${port}`);
});
