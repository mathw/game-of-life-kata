var game = require('../game/game');

module.exports = function(router) {
    router.post('/cells', function(req, res){
          console.log(req.body);
          
          var result = game.run(req.body);
          
          console.log(result);
          
          res.send(result);
    });
};