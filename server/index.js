const express = require('express');
const app = express();
const {resDatas} =require('./mock/home.mock');
const { mainList } =require('./mock/main.mock');

var server = app.listen(8080,'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/home',(req,res)=>{
    res.status(401);    
    res.send(resDatas)
})
app.get('/main',(req,res)=>{
  res.status(401);    
  res.send(mainList)
})
