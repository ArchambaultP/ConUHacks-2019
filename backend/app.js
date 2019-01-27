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

    pool.query('SELECT * FROM Produce', (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
        
});

var server = app.listen(port, function () {
 
});
