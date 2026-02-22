const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

let items = [
    { id: 1, text: 'Learn Fullstack Development' },
    { id: 2, text: 'Build a small project' }
];

// Get all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Add a new item
app.post('/api/items', (req, res) => {
    const newItem = {
        id: Date.now(),
        text: req.body.text
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// Delete an item
app.delete('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    items = items.filter(item => item.id !== id);
    res.status(204).send();
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
