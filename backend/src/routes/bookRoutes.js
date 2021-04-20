const express = require('express');
// const { Mongoose } = require('mongoose');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');


booksRouter.get('/', function(req,res){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    Bookdata.find()
    .then(function(books){
        res.send(books);
    })

});

booksRouter.get('/single', function(req,res){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    const id = req.query.i;
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.send(book);
    })

});

booksRouter.delete('/remove/:id',(req,res)=>{
    id = req.params.id;
    Bookdata.findByIdAndDelete({"_id":id})
    .then(()=>{
        res.send();
    })
})

booksRouter.post('/update/:i', function(req,res){
    var id = req.params.i
    var item = { $set : req.body.book }
    Bookdata.updateOne({_id:id}, item,{ strict:false }, function(err,result) {
        if (err) {
            console.log(err);
        } else {
            res.send();
        }
    });
});

module.exports = booksRouter;