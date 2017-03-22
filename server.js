var path = require('path');
var webpack = require('webpack');
var express = require('express');
import flash from 'connect-flash'
//var config = require('./webpack.config');
var config = require('./webpack.config');
var app = express();
var compiler = webpack(config);
var Session = require('express-session');
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import passportConfig from './src/api/config/passport';
var cookieParser = require('cookie-parser');
import routes from './src/api/routes/authentication';
import conf from './config'

require('./src/api//model').connect(conf.dbUri);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  noInfo : true,
  hot : true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.use(bodyParser.json({extended: true}));
app.use(cookieParser());

app.use(Session({
  secret:'IAmBatman',
  resave : true,
  saveUninitialized : true,
  key: 'localhost'
}));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

app.use(flash());
routes(app,passport);
app.listen(1234, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Magic is happening at http://localhost:1234/');
});
