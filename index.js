const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs')
const http = require('http')
const app = express();
const path = require('path');
const { Headers } = require('node-fetch')
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const PORT = process.env.PORT || 8899;

app.post('/api/new', async (req, res) => {
    let _new = req.body;
    console.log(req.body);
    res.set("Access-Control-Allow-Origin", "*")
    res.send(
      "toodeloo"
    );
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.createServer(app)
    .listen(PORT, function () {
        console.log('Go to http://localhost:'+PORT+'/')
    })
