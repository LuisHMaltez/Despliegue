const express = require('express');
const app = express();
const port = 316;

app.get('/api/hola', (req, res) => {
  res.send('Despliegue de API');
});

app.listen(port, () => {
  console.log(`La API está escuchando en http://localhost:${port}`);
});

process.on('SIGINT', function() {
  console.log('App is shutting down...');
  // Realiza aquí cualquier limpieza o liberación de recursos necesarios antes de salir
  process.exit();
});
