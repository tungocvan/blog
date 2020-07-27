const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const app = express();
app.use(morgan('combined'));

app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resource/views'));

app.get('/', function(req, res){
    res.render('home');
});
app.get('/tin-tuc', (req, res) => res.render('news'));
app.get('/contact', function(req, res){
    res.render('contact');
})

app.listen(process.env.PORT || 3000);