const express = require("express");
const authorData = require("./src/model/authorData");
const bookData = require("./src/model/bookData");
const userData = require("./src/model/userData");
var bodyParser = require('body-parser');
const cors = require("cors");
const jwt = require('jsonwebtoken');
var app = new express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded(
    {
        extended: true
    }
    ));

adminemail = "admin@gmail.com";
adminpass = "1234567";

function verifyToken(req, res, next)
{
    if(!req.headers.authorization)
    {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split('')[1]
    
    if(token == 'null')
    {
        return res.status(401).send('Unauthorized request')
    }

    let payload = jwt.verify(token, 'secretKey')
    console.log(payload)
    if(!payload)
    {
        return res.status(401).send('Unauthorized request')
    }

    req.userId = payload.subject
    next()
}

app.post("/admin", (req,res)=>{
    let adminData = req.body;

    if(adminemail != adminData.adminemail || adminpass !== adminData.adminpass)
    { 
        let message = "Failed"
        res.status(200).send({message});
    }
    else
    {
        let payload = {subject: adminemail + adminpass}
        let token = jwt.sign(payload, 'secretKey')  
        let message = "Success"
        res.status(200).send({token, message})
    }
})

app.get('/books',function(req,res){
    
    bookData.find()
                .then(function(books){
                    res.send(books);
                });
});

app.post('/addbook', function(req,res){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS');
    console.log(req.body);
    var item = {
        _id: req.body.book.id,
        title: req.body.book.title,
        author: req.body.book.author,
        genre: req.body.book.genre,
        description: req.body.book.description,
        image: req.body.book.image
    }

    bookData.findOne({_id: item._id})
    .then(book=>{
        if(book){
            let message = "Failed";
            console.log(message);
            res.status(200).send({message});
        }
        else{
            var book = bookData(item);
            book.save();
            console.log("Added book");
            let message = "Success";
            console.log(message)
            res.status(200).send({message});
        }
    })
    
})

app.post('/updatebook', function(req,res){
   id = req.body.book._id;
   title = req.body.book.title;
   author = req.body.book.author;
   genre = req.body.book.genre;
   description = req.body.book.description;
   image = req.body.book.image;
   console.log(title);
   bookData.findByIdAndUpdate( id, {"title": title, "author": author, "genre": genre, "description": description, "image": image})
   .then(book=>{
    if(book){
        res.send(); }
    })
})

app.post('/deletebook', function(req,res){
   console.log(req.body);
   id = req.body.book._id;
   bookData.findByIdAndDelete({"_id": id})
   .then(()=>{
       res.send();
   })
})

app.get('/authors',function(req,res){
    
    authorData.find()
                .then(function(authors){
                    res.send(authors);
                });
});

app.post('/addauthor', function(req,res){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS');
    // console.log(req.body);
    var item = {
        name: req.body.author.name,
        country: req.body.author.country,
        genre: req.body.author.genre,
        img: req.body.author.img
    }

    authorData.findOne({name: item.name, country: item.country, genre: item.genre, img: item.img})
    .then(author=>{
        if(author){
            let message = "Failed";
            console.log(message);
            res.status(200).send({message});
        }
        else{
            var author = authorData(item);
            author.save();
            console.log("Added author");
            let message = "Success";
            console.log(message)
            res.status(200).send({message});
        }
    })
    
})

app.post('/updateauthor', function(req,res){
   id = req.body.author._id;
   aname = req.body.author.name;
   country = req.body.author.country;
   genre = req.body.author.genre;
   img = req.body.author.img;
   console.log(img);
   authorData.findByIdAndUpdate( id, {"name": aname, "country": country, "genre": genre, "img": img})
   .then(author=>{
    if(author){
        res.send(); }
    })
})

app.post('/deleteauthor', function(req,res){
   console.log(req.body);
   id = req.body.author._id;
   authorData.findByIdAndDelete({"_id": id})
   .then(()=>{
       res.send();
   })
})


app.post("/user", (req,res)=>{

    let item = {
        email: req.body.useremail,
        password: req.body.userpass
    }

    userData.findOne({email: item.email, password: item.password})
    .then(user=>{
        if(user){
            let payload = {subject: user.email + user.password}
            let usertoken = jwt.sign(payload, 'secretKey')  
            let id = user._id
            let message = "Success"
            res.status(200).send({usertoken, id, message})
        }
        else{
            console.log("Wrong credentials");
            let message = "Failed"
            res.status(200).send({message});
        }
    })
})

app.post('/adduser', function(req,res){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS');
    // console.log(req.body);
    var item = {
        name: req.body.user.name,
        email: req.body.user.email,
        password: req.body.user.password,
        dob: req.body.user.dob,
        Favorites: [],
        Books: []
    }

    console.log(item);

    userData.findOne({email: item.email})
    .then(user=>{
        console.log(user)
        if(user){
            let message = "Failed";
            console.log(message);
            res.status(200).send({message});
        }
        else{
            var user = userData(item);
            user.save();
            console.log("Created user");
            let message = "Success";
            res.status(200).send({message});            
        }
    })
    
})


app.listen(3000);




// app.post('/review', function(req,res){ // To add user review of a book to users collection 

//     console.log("OKAY");
//     var item = {
//         user: req.body.user.user.replace(/:/g, ''),
//         book: parseInt(req.body.user.book),
//         review: req.body.user.review
//     }

//     userData.findByIdAndUpdate(item.user, {$push: {Reviews: {_id: item.book, review: item.review}}})
//     .then(function(user){
//         if(user)
//         {
//                 console.log(user.Reviews);
//                 let message = "Success";
//                 res.status(200).send({message});  
//         }
//         else{
//             let message = "Failed";
//             res.status(200).send({message});  
//         }
                
//     });

// })

