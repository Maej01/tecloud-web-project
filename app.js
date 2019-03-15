var express = require('express');
var reload = require('reload');
var app = express();
var aboutData = require('./app/data/about.json');
var servicesData = require('./app/data/services.json');
var managersData = require('./app/data/managers.json')
var developersData = require('./app/data/developers.json')
var teamMembersData = require('./app/data/teamMembers.json');

//setting the port
app.set('port', process.env.PORT || 3000);
app.set('aboutData', aboutData);
app.set('servicesData', servicesData);
app.set('managersData', managersData)
app.set('developersData', developersData)
app.set('teamMembersData', teamMembersData)

//setting up a view engine
app.set('view engine', 'ejs');
app.set('views', './app/views'); //specifying the view folder location

app.locals.siteTitle = 'Tecloud-Platform';

//accessing the static files
app.use(express.static('./app/public'));

//getting the routes
app.use(require('./app/routes/index'));
app.use(require('./app/routes/about'));
app.use(require('./app/routes/services'));
app.use(require('./app/routes/ourTeam'));
app.use(require('./app/routes/contact'));

app.listen(app.get('port'), function(){
    console.log('Tecloud server running on port'+ app.get('port'));
});

reload(app);