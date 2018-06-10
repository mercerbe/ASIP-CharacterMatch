const path = require('path');
const ejs = require('ejs');
'use strict';

module.exports = function(app){
  //home & default
  app.get('/', function(req,res){
    res.render(path.join(__dirname,'../views/pages/home.ejs'));
    //res.render('/app/pages/home.ejs');
  });

  //survey
  app.get('/survey', function(req,res){
    res.render(path.join(__dirname,'../views/pages/survey.ejs'));
  });

};
