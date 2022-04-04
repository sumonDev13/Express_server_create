const express =require("express");

const app =express();

app.get("/",function(req,res){
  res.send("<h1>hello express</h1>");
});

app.get("/contact",function(req,res){
  res.send("<h1>contact me : sumonmondalkhulna96@gmail.com</h1>");
});

app.get("/about",function(req,res){
  res.send("<h1>Name: sumon mondal . phone: 01757325153  . Bsc in Computer science and engineering</h1>");
});

app.get("/languages",function(req,res){
  res.send("<ul><li>english</li><li>bangla</li></ul>");
});

app.listen(3000,function(){
  console.log("server started");
});
