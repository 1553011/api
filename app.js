var express = require('express');
var app = express();
var models = require('./models');


// Define your routes here
app.use(express.static(__dirname + '/public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
	limit: '50mb', extended: true
}));




// Set Server Port & Start Server
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server is listening at port ' + app.get('port'));
});



var shirts = require('./routes/api');
app.use('/api', shirts);

var pannel = require('./routes/pannel');
app.use('/pannel', pannel);

var tour = require('./routes/tour_type');
app.use('/tour', tour);


app.get('/', function(req, res){
	res.redirect('/api');
});


app.get('/sync', function(req, res){
	models.sequelize.sync().then(function(){
		res.send('database sync completed!');
	});
});
