const express = require('express');
const path = require('path');
const app = express();


// set the port
const port = process.env.PORT || 3030;



// tell express where our static files are (js, images, css etc)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});




app.listen(port, () => {
    console.log(`app is running on ${port}`);
})

