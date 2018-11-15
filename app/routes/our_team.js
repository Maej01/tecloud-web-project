var express = require('express');
var router = express.Router();

//get the index
router.get('/our_team', (req, res, next) =>{

    //requiring the teamData variable from server
    var getTeamData = req.app.get('teamData');
    var sendTeamData = getTeamData.members; //sending the data from the members array
    
    //response
    res.render('our_team', {
        pageTitle: "team",
        pageID: "team",
        ourTeamData: sendTeamData
        
    });
});

// router.get('/our_team/:memberid', function(req, res){
//     //requiring the teamData variable from server
//     var getTeamData = req.app.get('teamData');
//     var sendTeamData = getTeamData.members; //sending the data from the members array
    
    //these are array variables
    // var farmPhotos = [];
    // var pageFarmers = [];

    //looping throught the farmer data json file
    // farmerDataFile.farmers.forEach(function(item){
    //     //checking if the request matches the farmer name
    //     if (item.shortname == req.params.memberid) {
    //         pageFarmers.push(item);
    //         farmPhotos = farmPhotos.concat(item.farm_photos);
    //     } 
    // });
    
    //rendering the farmers view
//     res.render('our_team', {
//         pageTitle: "team",
//         pageID: "team",
//         ourTeamData: sendTeamData
        
//     });
// });

module.exports = router;