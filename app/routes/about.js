var express = require('express');
var router = express.Router();

//get the index
router.get('/about', (req, res, next) =>{
    
    //response
    res.send('this is the about page but still under development');

});


module.exports = router;