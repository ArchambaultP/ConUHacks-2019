const path = require("path");
const express = require("express");
const mysql = require('mysql');
const app = express();

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



var server = app.listen(port, function () {
 
});
