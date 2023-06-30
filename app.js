const express = require('express');
const app = express();

app.use(express.json());

const saludos = [{
        id: 1,
        text: 'Hola Mundo!',
        estado: true
    },
    {
        id: 2,
        text: 'Despliegue de API',
        estado: true
    },
];

app.get('/', (req, res) => {
    res.send('Saludo Js Api');
});

app.get('/api/saludos', (req, res) => {
    res.send(saludos);
})

app.get('/api/saludos/:id', (req, res) => {
    const saludo = saludos.find(c => c.id === parseInt(req.params.id));
    if (!saludo) return res.status(404).send('Saludos no encontrado');
    else res.send(saludo);
})

app.post('/api/saludos', (req, res) => {
    const saludo = {
        id: saludos.length + 1,
        text: req.body.text,
        estado: (req.body.estado === 'true')
    };

    saludos.push(saludo);
    res.send(saludo);
});

app.delete('/api/saludos/:id', (req, res) => {
    const saludo = saludos.find(c => c.id === parseInt(req.params.id));
    if (!saludo) return res.status(404).send('Saludos no encontrado');

    const index = saludos.indexOf(saludo);
    events.splice(index, 1);
    res.send(saludo);
});

const port = process.env.port || 443;
app.listen(port, () => console.log(`Escuchando en puerto ${ port }...`));
