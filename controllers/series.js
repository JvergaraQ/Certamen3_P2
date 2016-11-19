var mongoose = require('mongoose');
var Serie = mongoose.model('Serie');

//GET - Return all registers
exports.findAll = function(req, res) { //findAll es el nombre de la funcion
 Serie.find(function(err, series) {
 if(err) res.send(500, err.message);
 console.log('GET /series');
 res.status(200).jsonp(series);
 });
};

//POST - Insert a new register
exports.add = function(req, res) { //para agregar datos a nuestra base datos req (peticion tiene body de req, tiene toda la info necesaria para crear nuestra clase)
 console.log('POST');
 console.log(req.body);
 //por cada elemento del req (request) 
 var serie = new Serie({ // para crear la clase accedemos al body
 name: req.body.name
 });
 serie.save(function(err, serie) { // para evaluar si hubo errores o no en el almacenado
 if(err) return res.send(500, err.message); // si ocurre un error en almacenado 
 res.status(200).jsonp(serie);
 });
};
