const express = require("express");
var bodyParser = require('body-parser');
const app = express();
let port = 8080;

app.use(bodyParser.json());
app.get('/lock',(req,res)=>{
    console.log("locked");
    res.send("asd");
    res.end();
})

app.get("/unlock",(req,res)=>{
    console.log("unlocked");
    res.send("unlocked");
    req.end();
})

app.listen(port,function(){
    console.log(`listening on port ${port}`);
});