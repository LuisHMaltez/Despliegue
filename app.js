const express = require('express');
const app = express();
const port = 3000;

app.get('/api/hola', (req, res) => {
  res.send('¡Hola, mundo! by Luis Maltez');
});

app.listen(port, () => {
  console.log(`La API está escuchando en http://localhost:${port}`);
});
