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

var Beer = mongoose.model('Beer', BeerSchema),  query ={name: /skol/i} ;

var mod = {
	name:'Brahma',
	description:'Masomenote'
};

var optional = {
	upsert:false,
	multi:true
};

Beer.update(query,mod,optional,function(err,data){
	if(err){
		console.log('Erro',err);
	}
	else{
		console.log('Cervejas atualizadas com sucesso...', data);
	}
	process.exit(0);//enecerra o processo do node
});


