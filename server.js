const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

//Express
const app = express();

//ejs views
app.set('view engine', 'ejs');
app.set('public', path.join(__dirname, 'public'));

//Express use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

//routing
app.use(express.static(path.join(__dirname, './app/routing/apiRoutes')));
app.use(express.static(path.join(__dirname, './app/routing/htmlRoutes')));

//listen
app.listen(3000, function(){
  console.log('Listening on Port 3000...');
})
