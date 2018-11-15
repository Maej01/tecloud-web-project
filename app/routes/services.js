var express = require('express');
var router = express.Router();

//get the index
router.get('/services', (req, res, next) =>{

    //assining the collected data
    var fetchServicesData = req.app.get('servicesData');
    var sendServicesData = fetchServicesData;

    //response
    res.render('services', {
        pageTitle: "services",
        pageID: "services",
        services: sendServicesData
    });

});


module.exports = router;