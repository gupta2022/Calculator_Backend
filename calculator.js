//jshint esversion:6
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.get('/', function (req, res) {
  //__dirname gives the address of directory
  res.sendfile(__dirname + "/index.html");
});
app.use(bodyParser.urlencoded({extended:true}));

app.post('/',function(req,res)
{
  console.log(req.body);
 var a=req.body.num1 ;
 var b=req.body.num2 ;
 result=Number(a)+Number(b);
  res.send("Thank You, Your Answer is "+result);
});
app.listen(3000);
console.log("listening on Port 3000");
console.log(__dirname);
