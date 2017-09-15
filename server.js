var express = require('express');
var morgan = require('morgan');
var path = require('path');


const { Pool, Client } = require('pg');

// pools will use environment variables
// for connection information
const pool = new Pool();

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  {
      
      
      
  }
  pool.end();
});

// you can also use async/await;
const res = await.pool.query('SELECT *FROM test');
await.pool.end();

// clients will also use environment variables
// for connection information
const client = new Client();
await.client.connect();

const res = await.client.query('SELECT *FROM test');
await.client.end();




           var app = express();
            app.use(morgan('combined'));
            
            app.get('/', function (req, res) {
              res.sendFile(path.join(__dirname, 'ui', 'index.html'));
            });
//var counter = 0;
//app.get('/counter', function (req, res){
 // counter = counter+1;
 // res.send(counter.toString());
    
//});

var config{
    PGHOST='db.imad.hasura.io';
PGUSER='sdhrsingh271';
PGDATABASE='sdhrsingh271';
PGPASSWORD= process.env.DB.PASSWORD;
PGPORT=5432;
    
}

app.get('/article-one' ,function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two' ,function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three' ,function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css' ,function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
