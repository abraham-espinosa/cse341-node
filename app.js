const express = require('express');

const app = express();

app.use('/',(req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product',(req, res, next) => {
    console.log('In the milddleware!'); 
    res.send('<h1>The "Add Procuct" Page</h1>'); //The default response header is text html
});

app.use('/',(req, res, next) => {
    console.log('In another milddleware!'); 
    res.send('<h1>Hello from Express</h1>'); //The default response header is text html
});

app.listen(3000); //const server = http.createServer(app); //server.listen(3000);