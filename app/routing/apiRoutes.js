const path = require('path');
const ejs = require('ejs');
const characters = require('../data/characters.js');


function ApiRoutes(app){

  //get all characters
  app.get('api/friends', function(req,res){
    res.json(characters);
  });

  //

};

module.exports = ApiRoutes();
