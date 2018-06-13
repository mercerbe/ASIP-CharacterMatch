const characters = require('../data/characters.js');
const users = require('../data/users.js');
const path = require('path');


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
  app.post('/api/users', function(req, res){

    //user input with path
    let newUser = req.body;
    console.log('new user: \n',newUser);

    //capture answers
    let answers = newUser.scores;
    console.log('answers: \n',answers);

    //match
    let matchName = '';
    let matchImage = '';
    let initial = 100;

    //loop through characters
    for (let i = 0; i < characters.length; i++) {

      //difference for each question
      var diff = 0;
      for (let j = 0; j < answers.length; j++) {
        diff += Math.abs(characters[i].scores[j] - answers[j]);
      }
      console.log(characters[i].name,':',diff);
      //smallest diff = match
      if(diff < initial){
        initial = diff;
        matchName = characters[i].name;
        console.log('!!!!!!!!!!MATCH:',matchName.toUpperCase(),'!!!!!!!!!!');
        matchImage = characters[i].image;
        console.log(matchImage);
      }

    }
    //add to users
    users.push(newUser);
    //send response
    res.json({matchName: matchName, matchImage: matchImage});
  });

};
