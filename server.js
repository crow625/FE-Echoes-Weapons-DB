const express = require('express');
// const mongoose = require('mongoose');
const app = express();

const PORT = process.env.SERVER_PORT || 8080;

app.use(express.json());

app.get('/api/example', function (req, res) {
    res.json({message: 'Hello from the server!'});
});

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})