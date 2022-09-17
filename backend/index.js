//import express
import express from 'express';

//import cors is for providing resources for the frontend
import cors from 'cors';

// database
import db from './config/database.js';
import req from 'express/lib/request.js';

//import routes
//import Router from "./routes/routes.js";

//init express
const app = express();

//use express json
app.use(express.json());

//use cors
app.use(cors({Origin: '*'}));

//use router
//app.use(Router);

import bodyParser from 'body-parser';

//import session from 'express-session';
//import flash from 'connect-flash';
//import cookie-parser from 'cookie-parser';
//const session = require('express-session');
//const flash = require('connect-flash');

/*
app.use(cookie-parser('keyboardCat');
app.use(session({
  secret:'flashblog',
  saveUninitialized: true,
  resave: true

//  secret: 'keyboardCat',
//  resave: true,
//  saveUninitialized: true,
//  cookie: {maxAge: 60000},
}));
 */
//app.use(flash());


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// for testing axios check postMan for the result
app.post('/register', (req, res) => {
  let theEmail;
  let thePassword;
  res.send({
    massage: `Hello ${req.body.email} ! Your user was registered!!!`,
    massage2: `Hello ${req.body.password} ! Your password was registered!!`,
  });
  //req.flash('msg','You are successfully logged in');
  theEmail = req.body.email;
  thePassword = req.body.password;
  console.log('THE e: ' + theEmail + ' The pass: ' + thePassword);
  var sql = 'INSERT INTO `employee_info` (name, job_title) VALUES (\'' +
      theEmail + '\', \'' + thePassword + '\')';
  var query = db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('1 record inserted');

  });

});

// we need to check for email and password to login
app.post('/login', (req, res) => {
  let post = req.body;
  let userEmail = post.email;
  let userPassword = post.password;
  let response = res;
  console.log('userEmail: ', userEmail + ' and password: ' + userPassword);

//let sql = "SELECT * FROM employee_info where (name, job_title) VALUES ('"+userEmail+"', '"+userPassword+"')" ;
  var sql = 'SELECT name, job_title FROM `employee_info` WHERE `name`=\'' +
      userEmail + '\' and job_title = \'' + userPassword + '\'';

  db.query(sql, function(err, results, fields) {
    try {
      if (err) throw 'err happened ' + err;
      if (results.length > 0) {
        //req.flash('message', 'Welcome to Blog!!');
        //res.write('successfully');
        //res.send(req.flash('msg'))
        res.send({message: 'Your successfully logged in'});
        console.log(results);// print out the result
      } else {
        console.log('Something went wrong');
        res.send({message: 'your password or your email is invalid'});
      }
    } catch (e) {
      console.log(e);
    }
  });

});

import multer from 'multer'
const upload = multer({
  des:'./Uploads'
})
app.post('/Upload', upload.single('file'), (req, res, next) => {
  res.json({file: req.file});
  console.log('The file: ' + req.file)
});

app.get('/files', (req, res) => {

})

//PORT
app.listen(8000, () => {
  console.log('Server running successfully!');

});

const user = {
  name: 'John',
  email: 'john@example.com'
}

const {name, email} = user
console.log(name +'\n'+ email);
