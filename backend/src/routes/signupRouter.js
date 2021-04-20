const express = require('express');
const signupRouter = express.Router();


signupRouter.get('/', function(req,res){
    res.render('signup',{
        nav:[{link:'/signup', name:'SignUp'},{link:'/login', name:'LogIn'} ],
        title:'Library'
    });
});

module.exports = signupRouter;