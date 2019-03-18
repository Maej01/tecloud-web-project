var express = require('express');
var router = express.Router();


//get the index
router.get('/ourTeam', (req, res, next) =>{

    //acquiring the teamData variable from server
    var getTeamData = req.app.get('teamMembersData');

    /* These are the global variables that will hold the retrived json array data from the team members json file */
    var fetchedManagersData = getTeamData.members.managers; 
    var fetchedDevelopersData = getTeamData.members.developers;
   
    //response
    res.render('ourTeam', {
        pageTitle: "team",
        pageID: "ourTeamPage",
        ourManagersData: fetchedManagersData,
        ourDevelopersData: fetchedDevelopersData
        
    });
});

router.get('/ourTeam/:memberid', (req, res, next) =>{ 

    //acquiring the teamData variable from server
    var getTeamData = req.app.get('teamMembersData');

    /* These variables will hold the retrived json array data from the team members json file */
    var fetchedManagersData = getTeamData.members.managers; 
    var fetchedDevelopersData = getTeamData.members.developers;

    //this array variable will hold the list of team members
    var teamMembers = [];

    //looping through the managers array to get the requested member detail
    fetchedManagersData.forEach(function(item){
        //only do this is the request for the member is made
        if(item.shortname == req.params.memberid) {
            teamMembers.push(item); //pushing the memeber data to the array
        }
    });

    //looping through the developers array to get the requested member detail
    fetchedDevelopersData.forEach(function(item){
        //only do this is the request for the member is made
        if(item.shortname == req.params.memberid) {
            teamMembers.push(item); //pushing the data to the array
        }
    });

    //response
    res.render('ourTeam', {
        pageTitle: "team",
        pageID: "memberDetail",
        ourManagersData: teamMembers,
        ourDevelopersData: teamMembers
        
    });
});

module.exports = router;