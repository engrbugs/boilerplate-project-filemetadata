'use strict';

var express = require('express');
var cors = require('cors');
const multer = require('multer');

var upload = multer({ dest: 'uploads/' });

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  console.log('-----------------get index-------------------');
  res.sendFile(__dirname + '/views/index.html');
  console.log('-----------------done index-------------------');
  });

app.post("/api/fileanalyse", upload.single('upfile'), function(req, res){
  console.log({greetings: "Hello, API"});
  const { originalname: name, mimetype: type, size } = req.file;

  res.json({
    name,
    type,
    size
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
