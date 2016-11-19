var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

// Middlewares					//bodyParser permite parsear json
app.use(bodyParser.urlencoded({ extended: false })); //solo acepta url codeadas UTF-8 por ejemplo
app.use(bodyParser.json()); //cargamos el modulo de json
app.use(methodOverride()); // permite que podamos conectarnos por distintos metodos de http

var router = express.Router(); //variable que permite manejar las peticiones de entrada, permite conectarnos ala base de datos de mongo db

// Index
router.get('/', function(req, res) { 
 res.send("Bienvenidos a la pregunta 2 del Certamen 3");
});
app.use(router); // que la app use la variable router

//importamos nuestros modelos y controladores
// Import Models and Controllers
var models = require('./models/series')(app, mongoose);
var SeriesCtrl = require('./controllers/series');

// API routes
var api = express.Router(); //tomar todoo lo qvenga por el formato  url  http://localhost:3000

api.route('/series')  //toma todo lo que venga desde esta url http://localhost:3000/api/series
 .get(SeriesCtrl.findAll) // si es un get
 .post(SeriesCtrl.add); // si es un post

app.use('/api', api);

// Start server
app.listen(3000, function() {
 console.log("Node server running on http://localhost:3000");
});


//implementacioon de conexion ala base de datos mongodb
mongoose.connect('mongodb://localhost/series', function(err, res) { //ruta y una funcion qeue analiza si la conexion fe conrrecta o no
 if(err) throw err; //si existe el erro lanzo un error
 console.log('Connected to Database');
});