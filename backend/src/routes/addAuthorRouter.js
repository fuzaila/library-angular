const express = require('express');
const addAuthorRouter = express.Router();
const Authordata = require('../model/Authordata');

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

addAuthorRouter.post('/', verifyToken,function(req,res){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS');
    var item = {
        name: req.body.author.name,
        books: req.body.author.books,
        country: req.body.author.country,
        img: req.body.author.img
    }
    var author = Authordata(item);
    author.save();
});

module.exports = addAuthorRouter;