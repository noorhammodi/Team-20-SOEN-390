var express = require('express');
const router = express.Router();
const mongoose =require("mongoose")
const ChannelModel = require("../models/model")
const path = require('path');
var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://mongo_db";
var dbName = "myFirstDB"
var url=`mongodb+srv://soenapp390:asdzxc@cluster0.efezn.mongodb.net/${dbName}?retryWrites=true&w=majority`

const connectionParams={
useNewUrlParser: true,
useUnifiedTopology:true


}


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("myFirstDB");
  
  dbo.collection("channels").find().toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});



mongoose.connect(url,connectionParams).then(()=>{

console.log("connected to the db")

}).catch((e)=>{

console.log(e)

})







router.post('/rest/api/add-user', function (req, res) {

  var hin= req.body.hin
  var email= req.body.email
  var password= req.body.password
  var role=req.body.role
  var firstName=req.body.firstName
  var lastName=req.body.lastName

  if(hin==null||firstName==null||email==null||password==null||lastName==null||role==null){
     res.send("error: missing fields")
  }
  else {
    var payload= new ChannelModel()
payload.firstName=firstName
payload.email=email
payload.hin=hin
payload.password=password
payload.role=role
payload.lastName=lastName

payload.save((err,data)=>{
if(err){
  console.log(err)
  res.send("error: username or health insurance number already taken ")
}
else{
  res.send("perfect: form sent")
console.log(data)

}


}) }

 });


router.get('/rest/api/users', function (req, res) {

  return_query(function(result) {
    res.send(result)
  });
  
});


router.post('/rest/api/login', function (req, res) {

    if(req.body.email==null&&req.body.password==null){
    res.send("error: field missing")
        
    }
else{
  return_query_load(function(result) {
    
  
   
    if(result[0].password == req.body.password){
      res.send(result)
    }
      else{

       res.send("error: invalid password")

      }

  

    
  },req.body.email);

}
});


router.get('/', function(req, res, next) {
  

  
  res.sendFile("./templates/restapi.html", {root:__dirname})
  
});





 function  return_query(my_callback) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw  err;
      var  db_var = db.db("myFirstDB");
      db_var.collection("channels").find().toArray(function(err, result) {
          if (err) throw  err;
          console.log(result);
          my_callback(result)
          db.close()
      });
  });
};


 function  return_query_load(my_callback, load) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw  err;
      var  db_var = db.db("myFirstDB");
      db_var.collection("channels").find({username:load}).toArray(function(err, result) {
          if (err) throw  err;
          console.log(result);
         
          my_callback(result)
        

        
          db.close()
      });
  });
};









module.exports = router;