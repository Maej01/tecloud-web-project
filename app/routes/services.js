var express = require('express');
var router = express.Router();

//get the index
router.get('/services', (req, res, next) =>{
    
    //response
    res.send('this is the services page but still under development');

});


module.exports = router;