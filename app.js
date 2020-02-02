const express = require('express');
const path = require('path');


// set the port
const port = process.env.PORT || 3000;

const app = express();


app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, 'views'));


app.use('/', require('./routes/index'));


app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    err.customMessage = "Hey! This page does not exist"
    next(err); // means fall thorugh to the next route
})


app.listen(port, () => {
    console.log(`app is running on ${port}`);
})

