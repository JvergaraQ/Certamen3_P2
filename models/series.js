var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serieSchema = new Schema({ //clase que tiene atributos y tipos deatributos 
 name: { type: String }
});

module.exports = mongoose.model('Serie', serieSchema);//a mongoose le pasamos un modelo que tiene nombre Client que tendra el schema llamado clientSchema
// exportando nuestro modelo creado