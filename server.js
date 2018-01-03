
'use strict';


var express = require('express');
var mongo = require('mongodb').MongoClient

var app = express()
var url = 'mongodb://effy:123123@ds133597.mlab.com:33597/images-search'

mongo.connect(url, function(err, client) {
  if (err) {
    throw err
  } else {
    console.log('Successfully connected to MongoDB.');
  }
  
  var db = client.db('images-search')
  
  var port = process.env.PORT || 8080;
  app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
  })
  
  
  app.get('/imagesearch/:q', function(req, res) {
    var q = req.url.split('/')[2]
    q = decodeURIComponent(q)     
    findImages(q, db, res)
    insertSearch(q, db)    
  })
  
  app.get('/latest/imagesearch', function(req, res) {
    showLatestSearch(db, res)
  })
   
})


function findImages(q, db, res) {   
  var collection = db.collection('images')
  var query = new RegExp(q, 'i')
  collection.find({
    "snippet": query
  }).toArray( function(err, result) {
    if (err) throw err;
    if (result) {
      res.send(result)
    } else {
      res.send('not found');
    }
  })  
}

function insertSearch(q, db) {
  var collection = db.collection('latest-search')
  var item = {
    term: q,
    when: new Date()
  }
  collection.insert(item, function(err, result) {
    if (err) throw err
    if (result) {
      console.log('insert success')
    }
  })
}

function showLatestSearch(db, res) {
   var collection = db.collection('latest-search') 
   collection.find({}).toArray(function(err, result) {
      if (err) throw err;
      if (result) {
        res.send(result)
      } else {
        res.send('not found');
      }

   })
}