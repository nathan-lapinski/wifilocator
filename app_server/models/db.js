var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/locator';
mongoose.connect(dbURI);

/*Listen to some mongoose connection events*/
mongoose.connection.on('connected', function(){
	console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err){
	console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconnected');
});