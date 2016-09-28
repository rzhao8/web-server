var express = require("express");
var app = express();
var PORT = 3001;


var middleware = require("./middleware.js");


app.use(middleware.logger);
app.get("/about", middleware.requireAuthentication,function(req,res){
	res.send("About us ! adn you");
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT,function(){
	console.log("Server started on " + PORT );
});