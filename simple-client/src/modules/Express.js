const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.listen(3000, () => {
console.log('Example app listening on port 3000!');
});
app.get('/', (req, res) => {
res.send('Hello World!');
});
app.get('/moshe', (req, res) => {
res.send('Hello Moshe!');
});
app.post('/', (req, res) => {
res.send('Hello POST!');
});