//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
  });

app.post("/", function(req , res){

    console.log(req.body);

    var num1 = parseInt(req.body.num1);
    var num2 = parseInt( req.body.num2);
    var Ans = num1 + num2;
    res.send("Your Number is: " +Ans);
});
  
app.get('/bmiCalculator', function (req, res) {
    res.sendFile(__dirname + "/bmiCalculatoh.html");
  });

app.post("/bmiCalculatoh", function(req , res){

    console.log(req.body);

    var num1 = parseInt(req.body.height);
    var num2 = parseInt( req.body.weight);
    var BMI = num1 / ((num2 * 12)^2);
    res.send("Your BMI is: " +BMI);
});
app.listen(3000, function(){
      console.log("Server is runninig on port 3000")
  });