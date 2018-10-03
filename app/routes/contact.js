var express = require('express');
var router = express.Router();

//get the index
router.get('/contact', (req, res, next) =>{
    
    //response
    res.send('this is the contact page but still under development');

});


module.exports = router;