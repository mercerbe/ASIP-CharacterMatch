const path = require('path');
const ejs = require('ejs');


function HtmlRoutes(app){
//home & default
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,'../public/home.ejs'))
});

//survey
app.get('/survey', function(req,res){
  res.sendFile(path.join(__dirname,'../public/home.ejs'))
});

};

module.exports = HtmlRoutes();
