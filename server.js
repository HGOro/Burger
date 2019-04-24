var express = require("express");
var exphbs = require('express-handlebars')
var burgers_controllers = require('./controllers/burgers_controller')
//YOUTUBEXXX
var bodyParser = require("body-parser");
//XXX

var app = express();
var PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());

app.use('/static', express.static('public'));


//XXXYOUTUBE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./controllers/burgers_controller")
//var routes = require("./controllers/burgers_controller.js")
app.use(routes);

//XXX

app.use('/api', burgers_controllers)

app.get('/', (req, res)=> {
    res.render('index');
});


//XXXXXX added from michelle's XXXXXXXXXXXXXXXXX
app.use('/api', burgers_controllers);
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

app.listen(PORT, ()=>{
    console.log(`App listening on PORT ${PORT}`)
});
