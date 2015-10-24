var http = require('http');
var Controller = require('./controller');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var url = req.url;
  var msg = '';

  switch(url){
  	case '/api/beers/create':
  		console.log('switch create');
	     Controller.create(req,res);  	
  	break;
  	case '/api/beers/retrieve':
  		console.log('switch retrieve');
  		Controller.retrieve(req,res);
  	break;
  	case '/api/beers/update':
  		Controller.update(req,res);
  	break;
  	case '/api/beers/delete':
  		Controller.delete(req,res);
  	break;
  	default:
  	   res.end('Rota não encontrada');
  	break;
  }
 
}).listen(3000);		



  
