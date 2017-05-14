const express = require('express');
const app = express();
const port = '8080';
const MongoClient = require('mongodb').MongoClient;
let db;

MongoClient.connect('mongodb://db:27017/clients', function(err, mdb){
  if(err){
    throw err;
  }
  db = mdb;
});

app.get('/', function(req, res) {
  console.log(req.ip)
  db.collection('client').find().toArray(function(err, result) {
    if(err){
      throw err;
    }
    res.send(result)
  })
})


app.listen(port)
console.log(`Server run on port ${port}`)
