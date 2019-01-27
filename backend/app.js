const path = require("path");
const express = require("express");
const mysql = require('mysql');
const app = express();
const bodyParser = require("body-parser");
var LocalStrategy = require('passport-local').Strategy;
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fruity',
};


const pool = mysql.createPool(config);
module.exports = pool;
const port = 8000;

app.get('/getProduce', function (req, res) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    pool.query('SELECT * FROM Produce', (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
        
});

app.get('/getListings', function (req, res) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    pool.query('SELECT * FROM Listings', (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
        
});


const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
app.use(jsonParser);
app.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});

passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'pass',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

         connection.query("SELECT * FROM `users` WHERE `email` = '" + email + "'",function(err,rows){
			if (err)
                return done(err);
			 if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            } 
			
			// if the user is found but the password is wrong
            if (!( rows[0].pass == bcrypt(password)))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
			
            // all is well, return successful user
            return done(null, rows[0]);			
		
		});
		


}));

app.post('/Login',
  passport.authenticate('local-login', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success?username='+req.user.username);
  });

app.post('/test',function(req,res){
    res.send("Should Work");
});

var server = app.listen(port, function () {
 
});
