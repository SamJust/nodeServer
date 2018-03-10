const express = require('express')
    , bodyParser = require('body-parser')
    , mongoose = require('mongoose')
    , cookieParser = require('cookie-parser')
    , uploadImage = require('./controllers/uploadImage.js');

//mongoose.connect('mongodb://localhost:27017/sam-test-fac');

let schemas = require('./mongooseSchemas.js');

let app = express()
  , urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use(urlencodedParser);
app.use(cookieParser());
app.use('/public', express.static('public'));

uploadImage(app);

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, ()=>{
  console.log('Listening to port 3000');
});
