// const server = require(`./simple-client/src/modules/WebServer.js`);
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
app.get('/', (req, res) => {
    fs.createReadStream(path.join(__dirname, './simple-client/src/static/index.html')).pipe(res);
    });

app.get('/david', (req, res) => {
fs.createReadStream(path.join(__dirname, './simple-client/src/static/davidPage.html')).pipe(res);
});
app.post('/', (req, res) => {
    res.send('Hello POST!');
});
// 165 page 