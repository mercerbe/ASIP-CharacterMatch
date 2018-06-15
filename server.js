const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
require('dotenv').config();

//Express
const app = express();
const PORT = process.env.PORT || 3000;

//ejs views
app.set('view engine', 'ejs');

//Express use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

//routing
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);
app.use('/app/public', express.static(process.cwd() + '/app/public'));
app.use('/app/views', express.static(process.cwd() + '/app/views'));

//listen
app.listen(PORT , function(){
  console.log('Listening on Port ' + PORT + "...");
})
