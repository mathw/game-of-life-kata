module.exports = function(router) {
    router.get('/HelloWorld', function(req, res){
       res.json({message: 'Hello World'});
    }),
    router.post('/HelloWorld', function(req, res){
          console.log("POST RECEIVED");
          res.send("");
    });
};