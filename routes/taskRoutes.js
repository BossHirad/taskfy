const { getTasks, createTasks, updateTasks, deleteTasks } = require("../controllers/taskController");

const taskRoutes=(req,res)=>{
    if(req.method=='GET'){
        getTasks(req, res);
    }else if(req.method=='POST') {
        createTasks(req, res);
    }else if(req.method=='PATCH') {
        updateTasks(req, res);
    }else if(req.method=='DELETE') {
        deleteTasks(req, res);
    }else{
        res.writeHead(404,'Not Found', {'content-type': 'application/json'})
            res.end(JSON.stringify({
                message:'Page Not Found'
            }))
      
      }  
}
module.exports=taskRoutes;