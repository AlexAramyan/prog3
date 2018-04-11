var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet'><a href = 'name' style = 'color:silver; font-family: Oswald, sans-serif;font-size: 200%'>Hello world</a>");
});

app.get("/name/", function(req, res){
   res.send("<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet'><a href = '../' style = 'color:gold; font-family: Oswald, sans-serif;font-size: 200%'>Hello world 2</a>");
});

app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name + "</h1>");
});
app.get("/google/search/:name1", function(req, res){
   var name1 = req.params.name1;
   res.redirect("http://www.bing.com/search?q=" + name1);
});

app.get("/*", function(req, res){
   res.send("<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet'><h1 style = 'color:red; font-family: arial, sans-serif;font-size: 200%'>404 not found</a>");
});



app.listen(3000, function(){
   console.log("Example is running on port 3000");
});