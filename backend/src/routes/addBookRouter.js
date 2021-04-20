const express = require('express');
const addBookRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
}


addBookRouter.post('/', verifyToken,function(req,res){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS');
    var item = {
        BookName: req.body.book.BookName,
        Author: req.body.book.Author,
        Genre: req.body.book.Genre,
        Cover: req.body.book.Cover
    }
    var book = Bookdata(item);
    book.save();
});


module.exports = addBookRouter;