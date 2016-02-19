var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var game = require('./game');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

var lastmsg;

io.on('connection', function(socket){
    
   console.log('a user connected');
   
   socket.on('form submit', function(msg){
       
        lastmsg = JSON.stringify(msg);
         
        msg = game.run(msg);
    
        console.log(lastmsg == JSON.stringify(msg));
        
        if(lastmsg != JSON.stringify(msg)){
            io.emit('form output', msg);
        }     
   }); 
});