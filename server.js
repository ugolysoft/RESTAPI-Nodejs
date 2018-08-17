var app = require('./app');

var port = process.env.PORT || 3500;

/*var server = app.listen(port, function(){
	//console.log(`server up: http://localhost:${port}`);
});*/
//var server = app.listen(port);
if(!module.parent){
	app.listen(port);
}
module.exports = app;