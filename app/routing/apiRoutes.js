const path = require('path');
const ejs = require('ejs');
const characters = require('../data/characters.js');
const users = require('../data/users.js');

module.exports = function(app){

  //get all characters
  app.get('/api/characters', function(req,res){
    res.json(characters);
  });

  //get all users
  app.get('/api/users', function(req, res){
    res.json(users);
  });

  //new user entry
  app.post('api/users', function(req, res){

    //user input with path
    let newUser = req.body;

    //capture responses
    let responses = newUser.scores;

    //match
    let matchName = '';
    let matchImage = '';
    let initial = 100;

    //loop through characters
    for (let i = 0; i < characters.length; i++) {

      //difference for each question
      let diff = 0;
      for (var j = 0; j < responses.length; j++) {
        diff += Math.abs(characters[i].scores[j] - responses[j]);
        console.log(diff);
      }
      //smallest diff = match
      if(diff < inital){
        inital = diff;
        matchName = characters[i].name;
        matchImage = characters[i].image;
      }

    }
    //add to users
    users.push(newUser);
    res.json({ matchName: matchName, matchImage: matchImage });
  });

};
