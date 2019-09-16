const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const notification = require('./db.json');

app.use(function(req, res, next) {
    var allowedOrigins = ['http://localhost:3000'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
         res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
  });

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/notification', (req, res) => res.json(notification))

app.listen(port, () => {console.log(`Serever is running on port:${port}`)})