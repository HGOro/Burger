var express = require("express");
var exphbs = require('express-handlebars')
var burgers_controllers = require('./controllers/burgers_controller')

var app = express();

var PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json())

app.use('/static', express.static('public'))

app.use('/api', burgers_controllers)

app.get('/', (req, res)=> {
    res.render('index');
});

app.listen(PORT, ()=>{
    console.log(`App listening on PORT ${PORT}`)
});
