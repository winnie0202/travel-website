const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Сервер працює!');
});

app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});
