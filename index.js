// const http = require('http')
// const fs = require('fs')
// const server = http.createServer(function(req, res){
//     if(req.url == '/'){ 
//         //res.write('homepage')
//         const homepage = fs.readFileSync('index.html')
//         res.end(homepage)
// }
//     else if(req.url == '/about') {
//         //res.write('about')
//    const about= fs.readFileSync('about.html')
//     res.end(about)
//     }
//     })

//const area = require("./area")

//     server.listen(3000, function
//     (){
//     console.log(" port 3000")})
//...............................................................

// const express = require('express')

// const app = express()

// app.get('/', function(req, res) {
//     res.json({msg:'success'})
// })

// app.get('/about', function(req, res) {
//     res.json({data:'available' , msg:'success'})
// })

// app.listen(3000, function(){
//          console.log(" listening port 3000")})



//................................................for area

// var area = require('./area');
// // var measure = 
// // { area: (x,y) =>  (x*y)
// // };

//  function solve(x,y){
//      console.log("area is: " + area.area(x,y))
// }
// solve(2,3);


//................................................. for callback function area

// function solve(x,y){
//     area(x,y,(err, area) => {
//     if(err){console.log("error" +err.m)}
//     else{ console.log("area is " +  area.area());}
//      });
//      console.log("after arrea");
//     }
//     solve(0,3);


//..............................................
const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res) => {
res.write('request for ' + req.url+ "method is "+ req.method)

res.end()
}) ;
server.listen(3000, function(req,res){console.log("listen this port")});