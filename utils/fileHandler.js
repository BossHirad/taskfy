const fs=require('fs');
exports.writeTasksToFile=(data)=>{
    fs.writeFileSync('./../data/tasks.json',JSON.stringify(data));
    return data;
}
exports.raedTasksFromFile=()=>{
    if(!fs.existsSync('./../data/tasks.json')){
        this.writeTasksToFile([]);
    }
   const data= fs.readFileSync('./../data/tasks.json');
   return JSON.parse(data);
}