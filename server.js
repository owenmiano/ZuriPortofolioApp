const http=require('http');
const PORT=3500;
const fs=require('fs');
const url=require('url')

const server=http.createServer(function(req,res){
    if(req.url==='/'){
        
        fs.readFile('home.html',function(error,data){
                if(error){
                    res.writeHead(404,{'content-Type':'text/html'})
                    return res.end("Page not found")
                }
                    res.writeHead(200,{'content-Type':'text/html'})
                    res.write(data);
                    return res.end();
       
    })
}
    if(req.url==='/about'){
        fs.readFile('about.html',function(error,data){
            if(error){
                res.writeHead(404,{'content-Type':'text/html'})
                return res.end("Page not found")
            }
                res.writeHead(200,{'content-Type':'text/html'})
                res.write(data);
                return res.end();
   
})
    }


    if(req.url==='/contact'){
       fs.readFile('contact.html',function(error,data){
                if(error){
                    res.writeHead(404,{'content-Type':'text/html'})
                    return res.end("Page not found")
                }
                    res.writeHead(200,{'content-Type':'text/html'})
                    res.write(data);
                    return res.end();
       
    })
    }
})

server.listen(PORT,(error)=>{
    if(error){
        console.log(`error: ${error}`)
    }else {
        console.log(`Server is listening on port: ${PORT}`)
    }
})