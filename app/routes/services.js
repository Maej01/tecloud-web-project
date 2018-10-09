var express = require('express');
var router = express.Router();

//get the index
router.get('/services', (req, res, next) =>{
    
    //response
    res.render('services', {
        pageTitle: "services",
        pageID: "services"
    });

});


module.exports = router;