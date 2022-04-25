
 const express = require('express');
 const path= require('path');
const app = express()

app.use(express.static('public'))

app.get('/', function(req,res){
    const homepage = path.resolve(__dirname, 'index.html')
    //console.log(__dirname);
    res.sendFile(homepage);

})

app.all('/about', function(req,res){
    const aboutpage = path.resolve(__dirname, 'about.html')
    console.log(__dirname);
    res.sendFile(aboutpage);

})
app.listen(3000, function(){
    console.log('listening to 3000 port');
})


