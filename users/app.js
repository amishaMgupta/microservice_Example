const express = require('express');

let app = express();

app.get('/',(req,res)=>{
    res.send("Hello users")
})

module.exports = app;