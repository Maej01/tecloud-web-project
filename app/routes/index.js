var express = require('express');
var router = express.Router();

//get the index
router.get('/', (req, res, next) =>{
    
    //response
    res.render('index', {
        pageTitle: "home",
        pageID: "home"
    });

});


module.exports = router;