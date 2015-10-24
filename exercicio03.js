var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pos-unoesc');

var db = mongoose.connection;

db.on('error', function(err){ console.log('Erro de conexao.',err ) ;});
                             
db.on('open', function(){ console.log('Conexão Aberta') });
                             
db.on('conected', function(err){ console.log('Conectado') });
                             
db.on('disconnected', function(){ console.log('Desconectado') });                 

var Schema = mongoose.Schema;

var json_schema = {  name: {type:String, default:''},
                   description: {type :String, default:''} };

var BeerSchema = new Schema(json_schema);

var Beer = mongoose.model('Beer', BeerSchema);

var dados = { name: 'Skol', desciption: 'opa'};

var model = new Beer(dados);

model.save( function(err, data) { 
if (err) { 
    console.log('Erro:' , err );

} else {
console.log('Cerveja inserida:', data); 

}

} )

