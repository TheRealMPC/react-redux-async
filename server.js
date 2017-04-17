const express = require('express');
const { json } = require('body-parser');
const config = require('./config');

const port = 5555;

const app = express();

app.use(json());

app.use(express.static(`${__dirname}/dist`))

app.listen(port, ()=> console.log(`port::${port}`))
