const express = require('express');
const authorRouter = express.Router();
const Authordata = require('../model/Authordata');


authorRouter.get('/', function(req,res){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    Authordata.find()
    .then(function(authors){
        res.send(authors);
    })
});

authorRouter.get('/single', function(req,res){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    const id = req.query.i;
    Authordata.findOne({_id:id})
    .then(function(author){
        res.send(author);
    })

});

authorRouter.delete('/remove/:i', function(req,res){
    const id = req.params.i
    Authordata.findByIdAndDelete({"_id":id})
    .then(()=>{
        res.send();
    })

});

authorRouter.post('/update/:i', function(req,res){
    var id = req.params.i
    var item = { $set : req.body.author }
    Authordata.updateOne({_id:id}, item,{ strict:false }, function(err,result) {
        if (err) {
            console.log(err);
        } else {
            res.send();
        }
    });
});

module.exports = authorRouter;