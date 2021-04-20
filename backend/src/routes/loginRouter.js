const express = require('express');
const loginRouter = express.Router();


loginRouter.get('/', function(req,res){
    res.render('login',{
        nav:[{link:'/signup', name:'SignUp'},{link:'/login', name:'LogIn'} ],
        title:'Library'
    });
});

module.exports = loginRouter;