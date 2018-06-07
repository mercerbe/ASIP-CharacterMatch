const path = require('path');
const ejs = require('ejs');
const characters = require('../data/characters.js');

module.exports = function(app){

  //get all characters
  app.get('/api/characters', function(req,res){
    res.json(characters);
  });

};
