var express = require('express');
var router = express.Router();

//get the index
router.get('/our_team', (req, res, next) =>{
    
    //response
    res.send('this is the our team page but still under development');

});


module.exports = router;