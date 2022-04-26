//  const { append } = require('Express/lib/response')
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

// const area = require("./area")

//     server.listen(3000, function
//     (){
//     console.log(" port 3000")})
// ............................................................... working on express

// const express = require('express');
// const morgan = require('morgan');
// const hostname = 'localhost';
// const port = 3000;
// const app = express()

// app.use(morgan('dev'))

// app.use(express.static(__dirname , '/public/css'))
// app.use((req,res,next) => {
// console.log(req.headers);
// res.statusCode = 200;
// res.setHeader('Content_type', 'text/html');

// res.end('<html><body><h1>This is an express server</h1></body></html>');
// })


// app.get('/', function(req, res) {
//     res.json({msg:'success'})
// })

// app.get('/*', function(req, res) {
//     res.json({data:'available' , msg:'success'})
// })



// app.listen(port, function()  {
//          console.log(` listening port 3000 httop://${hostname}:${port}`  )})



// ................................................for area

// var area = require('./area');
// // var measure = 
// // { area: (x,y) =>  (x*y)
// // };

//  function solve(x,y){
//      console.log("area is: " + area.area(x,y))
// }
// solve(2,3);


// ................................................. for callback function area

// function solve(x,y){
//     area(x,y,(err, area) => {
//     if(err){console.log("error" +err.m)}
//     else{ console.log("area is " +  area.area());}
//      });
//      console.log("after arrea");
//     }
//     solve(0,3);


// ..............................................http example 2
// const http = require('http')
// const fs = require('fs')
// const path = require('path')

// const server = http.createServer((req,res) => {
// res.write('request for ' + req.url+ "method is "+ req.method)

// res.end()
// }) ;
// server.listen(3000, function(req,res){console.log("listen this port")});

//....................................on nodemon
// const express = require('express');
// const path= require('path');
// const app = express()

// app.use(express.static('public'))

// app.get('/', function(req,res){
//    const homepage = path.resolve(__dirname, 'index.html')
//    //console.log(__dirname);
//    res.sendFile(homepage);

// })

// app.all('/about', function(req,res){
//    const aboutpage = path.resolve(__dirname, 'about.html')
//    console.log(__dirname);
//    res.sendFile(aboutpage);

// })
// app.listen(3000, function(){
//    console.log('listening to 3000 port');
// })




// ..........................on template engine pug
const express = require('express');
const path= require('path');
const app = express()

 //let ejs = require('ejs');
const {render, compileFile} = require('pug');
 app.use('/style', express.static('public/css'))

 app.set('view engine', 'pug')


app.get('/blog', function(req,res){
    const func = compileFile('views/heading.pug')
    console.log(func({name: 'suraksha'}));
    console.log(func({name: 'kumari'}));
    const products = ['a','b','c','d','e','ok']
   res.render('blog', {name: 'suraksha', products});

})

app.all('*', function(req,res){
    res.render('about', {name:'suraksha'});
})
app.listen(3000, function(){
    console.log('listening to 3000 port');
})


