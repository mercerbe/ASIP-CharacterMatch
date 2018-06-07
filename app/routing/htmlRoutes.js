const path = require('path');
const ejs = require('ejs');

module.exports = function(app){
  //home & default
  app.get('/', function(req,res){
    res.render(path.join(__dirname,'../public/home.ejs'))
  });

  //survey
  app.get('/survey', function(req,res){
    res.render(path.join(__dirname,'../public/survey.ejs'))
  });

};
