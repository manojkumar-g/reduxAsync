var path = require('path');
var webpack = require('webpack');
var express = require('express');
//var config = require('./webpack.config');
var config = require('./webpack.config');
import authRouter from './src/app/routes/authentication';
var app = express();
var compiler = webpack(config);
var Session = require('express-session');
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport'

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('successfully connected to db');
});

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  noInfo : true,
  hot : true
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.json());
app.use(Session({
  secret:'IAmBatman',
  resave : true,
  saveUninitialized : true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/auth',authRouter);

app.listen(1234, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:1234/');
});
