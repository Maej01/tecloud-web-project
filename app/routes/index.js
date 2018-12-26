var express = require('express');
var router = express.Router();

//get the index
router.get('/', (req, res, next) =>{

    var fetchServicesData = req.app.get('servicesData');
    var sendServicesData = fetchServicesData;

    //response
    res.render('index', {
        pageTitle: "home",
        pageID: "home",
        services: sendServicesData
    });

});


module.exports = router;