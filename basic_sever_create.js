const http= require('http');
http.createServer((req,resp)=>{
    resp.write("<h1> hello my frind <h1>");
    resp.end();
}).listen(5500);
// also write html code in own server
//open crome and type localhost:5500 own server
