const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

//Express
const app = express();
const PORT = 3000;

//ejs views
app.set('view engine', 'ejs');

//Express use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

//routing
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);
app.use(express.static(__dirname + '/public'));

//listen
app.listen(3000, function(){
  console.log('Listening on Port ' + PORT);
})
