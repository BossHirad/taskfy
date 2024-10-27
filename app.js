const http=require('http');
const taskRoutes = require('./routes/taskRoutes');
const PORT=9000;
const HOSTNAME='localhist';
const server=http.createServer((req,res)=>{
    if (req.url.startsWith('/tasks')){
        taskRoutes(req,res)
    }else{
        res.writeHead(404,'Not Found', {'content-type': 'application/json'})
            res.end(JSON.stringify({
                message:'Page Not Found'
            }))
      
      }  
        
    

});
