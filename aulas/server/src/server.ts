import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [{ name: 'Luiz', idade: 40 }]

    return response.json(users);
});

app.listen(3333);