const express = require('express');
const app = express();

const path = require('path');

app.use('/welcome',express.static(path.join (__dirname,'public')));

module.exports = app;