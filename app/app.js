var express = require('express');
var app = express();

//setting the port
app.set('port', process.env.PORT || 3000);

//setting up a view engine
app.set('view engine', 'ejs');
app.set('views', './views'); //specifying the view folder location

app.locals.siteTitle = 'Tecloud-Platform';

//accessing the static files
app.use(express.static('./public'));

//getting the routes
app.use(require('./routes/index'));
app.use(require('./routes/about'));
app.use(require('./routes/services'));
app.use(require('./routes/our_team'));
app.use(require('./routes/contact'));

app.listen(app.get('port'), function(){
    console.log('Tecloud server running on port'+ app.get('port'));
})