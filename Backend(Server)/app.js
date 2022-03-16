var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");
var AuthRouter = require("./Routes/AuthRoutes/Auth");
var CourseRouter = require("./Routes/AdminRoutes/Courses");
var FacultyRouter = require("./Routes/AdminRoutes/Faculty");
var MeetingRouter = require("./Routes/MeetingRoute/MeetingRoute");
var { getUser } = require("./Middleware/User");

var app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/Auth", AuthRouter);
app.use("/Course", getUser, CourseRouter);
app.use("/Faculty", getUser, FacultyRouter);
app.use("/Meeting", getUser, MeetingRouter);

app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/CAC");
    app.listen(process.env.PORT || 4000, () =>
      console.log("Listening on port 4000")
    );
  } catch (error) {
    console.log(error);
  }
};

start();
