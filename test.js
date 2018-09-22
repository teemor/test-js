var httpServer = require('http')
httpServer.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("hehe")
    res.end("hhh")
}).listen(2333)