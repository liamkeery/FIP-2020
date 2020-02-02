const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {


    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');
    
})



module.exports = router;