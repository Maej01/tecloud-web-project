var express = require('express');
var router = express.Router();


//get the index
router.get('/ourTeam', (req, res, next) =>{
   
    //requiring the teamData variable from server
    // var getManagersData = req.app.get('managersData'); //getting the managers data from the members array
    // var getDevelopersData = req.app.get('developersData'); //getting the developers data from the developers array
    // var sendManagersData = getManagersData.managers; //sending the managers data from the members array
    // var sendDevelopersData = getDevelopersData.developers; //sending the developers data from the developers array

    var getTeamData = req.app.get('teamMembersData');
    var sendManagersData = getTeamData.managers;
    var sendDevelopersData = getTeamData.developers;

    //response
    res.render('ourTeam', {
        pageTitle: "team",
        pageID: "ourTeamPage",
        ourManagersData: sendManagersData,
        ourDevelopersData: sendDevelopersData
        
    });
});

router.get('/ourTeam/:memberid', (req, res, next) =>{

    //requiring the teamData variable from server
    // var getManagersData = req.app.get('managersData'); //getting the managers data from the members array
    // var getDevelopersData = req.app.get('developersData'); //getting the developers data from the developers array
    // var sendManagersData = getManagersData.managers; //sending the managers data from the members array
    // var sendDevelopersData = getDevelopersData.developers; //sending the developers data from the developers array

    var getTeamData = req.app.get('teamMembersData');
    var sendManagersData = getTeamData.managers;
    var sendDevelopersData = getTeamData.developers;

    var teamMembers = [];

    //looping through the managers array
    getTeamData.managers.forEach(function(item){
        //only do this is the request for the member is made
        if(item.shortname == req.params.memberid) {
            teamMembers.push(item);
        }
        
    });

    //looping through the developers array
    getTeamData.developers.forEach(function(item){
        //only do this is the request for the member is made
        if(item.shortname == req.params.memberid) {
            teamMembers.push(item);
        }
        
    });

    //response
    res.render('ourTeam', {
        pageTitle: "member info",
        pageID: "memberDetail",
        ourManagersData: sendManagersData,
        ourDevelopersData: sendDevelopersData
        
    });
});

module.exports = router;