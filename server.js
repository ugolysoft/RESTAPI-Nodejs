var app = require('./app');

var port = process.env.PORT || 3500;

app.listen(port, function(){
	//console.log(`server up: http://localhost:${port}`);
});