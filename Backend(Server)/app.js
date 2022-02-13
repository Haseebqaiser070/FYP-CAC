var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require("cors");
var CourseRouter = require('./Routes/Courses');
var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/Course', CourseRouter);

app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/CAC')
    app.listen( process.env.PORT || 4000,()=>console.log("Listening on port 4000"))

  } catch (error) {
    console.log(error);
  }
};

start();

