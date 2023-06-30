const express = require('express');
const app = express();

app.use(express.json());

const events = [{
        id: 1,
        name: 'Mora in El Salvador',
        day: 'Friday apr 28 2023 at 8:00 pm ',
        location: 'Nuevo Cuscatlan',
        estado: true
    },
    {
        id: 2,
        name: 'Danny Ocean in El Salvador',
        day: 'Thursday jun 22 2023 at 8:00 pm',
        location: 'San Salvador',
        estado: true
    },
    {
        id: 3,
        name: 'Juegos de Centroamerica y del Caribe ',
        day: 'Sunday jul 02 2023 at 8:00 pm',
        location: 'San Salvador',
        estado: true
    }
];

app.get('/', (req, res) => {
    res.send('Event Js Api');
});

app.get('/api/hola', (req, res) => {
    res.send(events);
})

app.get('/api/hola/:id', (req, res) => {
    const event = events.find(c => c.id === parseInt(req.params.id));
    if (!event) return res.status(404).send('Evento no encontrado');
    else res.send(event);
})

app.post('/api/hola', (req, res) => {
    const event = {
        id: events.length + 1,
        name: req.body.name,
        day: req.body.day,
        location: req.body.location,
        estado: (req.body.estado === 'true')
    };

    events.push(event);
    res.send(event);
});

app.delete('/api/hola/:id', (req, res) => {
    const event = events.find(c => c.id === parseInt(req.params.id));
    if (!event) return res.status(404).send('Evento no encontrado');

    const index = events.indexOf(event);
    events.splice(index, 1);
    res.send(event);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Escuchando en puerto ${ port }...`));
