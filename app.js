const express = require('express');
const app = express();

//Routes

app.get("/",(req,res)=>{
    res.send("hello world");
});

//App Listen 3000 port
app.listen(3000);