const express = require('express');

const app = express();

const PORT = 4000

const users = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
];

app.get("/users", (req, res) => {
    return res.json(users);
});

app.listen(PORT, () => {
    console.log("server is running on port", PORT);
});