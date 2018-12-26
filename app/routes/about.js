var express = require('express');
var router = express.Router();

//get the index
router.get('/about', (req, res, next) =>{
    
    var getAboutData = req.app.get('aboutData');
    var sendAboutData = getAboutData;

    //response
    res.render('about', {
        pageTitle: "about",
        aboutDt: sendAboutData,
        pageID: "about"
    });

});


module.exports = router;