//express is the server itself
const express = require('express')
const app = express()
const path = require('path');
//mustache passes data to front end
const mustacheExpress = require('mustache-express');


//set the mustache engine and allow the server to see the views subdirectory
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views',path.join(__dirname, 'views'));



app.use("/www", express.static(__dirname + "/www"));
app.use("/images", express.static(__dirname + "/images"));



app.get('/', (req, res) =>{
  res.render('first.html', {});
  return false;
});


app.get('/second', (req, res) =>{
  res.render('second.html', {});
  return false;
});


app.get('/third', (req, res) =>{
  res.render('third.html', {});
  return false;
});



//listen to port for requests
app.listen(process.env.PORT || 3000, () => { })