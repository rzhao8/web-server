var express = require("express");
var app = express();
var PORT = 3001;

var middleware = {
	requireAuthentication:  funtion(req,res,next){
		console.log("private route hit");
		next();
	},
	logger: function(req,res,next){
		console.log("Request: " + new Date().toString() + " "+ req.method + " " + req.originalUrl());
		next();
	}

};

app.use(middleware.logger);
app.get("/about", middleware.requireAuthentication,function(req,res){
	res.send("About us");
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT,function(){
	console.log("Server started on " + PORT );
});